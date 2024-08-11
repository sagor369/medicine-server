import { User } from "./user.model";

// Admin ID
export const findLastUserId = async () => {
    const lastAdmin = await User.findOne(
      {
        role: 'user',
      },
      {
        id: 1,
        _id: 0,
      },
    )
      .sort({
        createdAt: -1,
      })
      .lean();
  
    return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
  };
  
  export const generateUserId = async () => {
    let currentId = (0).toString();
    const lastAdminId = await findLastUserId();
  
    if (lastAdminId) {
      currentId = lastAdminId.substring(2);
    }
  
    let incrementId = (Number(currentId) + 1).toString().padStart(5, '0');
  
    incrementId = `U-${incrementId}`;
    return incrementId;
  };

  export const generateRandomNumberCode = ()=> {
    const digits = '0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      result += digits[randomIndex];
    }
    return Number(result);
  }
