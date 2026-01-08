import userService from '../services/user.service.js';

class UserController {
  async create(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getAll(req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getById(req, res) {
    const user = await userService.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  }

  async update(req, res) {
    const user = await userService.updateUser(parseInt(req.params.id), req.body);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  }
  async deleteUser(id) {
    return await User.findOneAndDelete({ id });
  }
//   async deleteAll(req, res) {
//   const result = await userService.deleteAllUsers();
//   res.json({ message: `Deleted ${result.deletedCount} user(s)` });
// }

}

export default new UserController();
