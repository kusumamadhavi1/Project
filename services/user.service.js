import User from '../models/user.model.js';

class UserService {
  async createUser(data) {
    return await User.create(data);
  }

  async getAllUsers() {
    return await User.find();
  }

  async getUserById(id) {
    return await User.findOne({ id }); // query by numeric id
  }

  async updateUser(id, data) {
    return await User.findOneAndUpdate({ id }, data, { new: true });
  }
  async delete(req, res) {
  const user = await userService.deleteUser(parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted successfully', user });
}
//  async deleteAllUsers() {
//     return await User.deleteMany({});
//   }
}

export default new UserService();
