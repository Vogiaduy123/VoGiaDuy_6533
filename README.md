<<<<<<< HEAD
# Quản lý sản phẩm và danh mục

## Cài đặt

1. Clone repository:
```bash
git clone https://github.com/Vogiaduy123/VoGiaDuy_6533.git
cd VoGiaDuy_6533
```

2. Cài đặt dependencies cho backend:
```bash
npm install
```

3. Cài đặt dependencies cho frontend:
```bash
cd frontend
npm install
```

4. Tạo file .env với nội dung:
```
MONGODB_URI=mongodb://localhost:27017/BT
SECRET_KEY=your_jwt_secret_key
PORT=3001
```

## Chạy ứng dụng

1. Chạy backend:
```bash
npm start
```

2. Chạy frontend (trong thư mục frontend):
```bash
cd frontend
npm start
```

## Tính năng

1. Quản lý sản phẩm:
- Xem danh sách sản phẩm (không cần đăng nhập)
- Thêm sản phẩm mới (yêu cầu quyền mod)
- Sửa sản phẩm (yêu cầu quyền mod)
- Xóa sản phẩm (yêu cầu quyền admin)

2. Quản lý danh mục:
- Xem danh sách danh mục (không cần đăng nhập)
- Thêm danh mục mới (yêu cầu quyền mod)
- Sửa danh mục (yêu cầu quyền mod)
- Xóa danh mục (yêu cầu quyền admin)

3. Quản lý người dùng:
- Đăng ký
- Đăng nhập
- Phân quyền (user, mod, admin)

## API Endpoints

1. Authentication:
- POST /auth/login - Đăng nhập
- POST /auth/signup - Đăng ký
- GET /auth/me - Lấy thông tin user đang đăng nhập
- POST /auth/changepassword - Đổi mật khẩu

2. Products:
- GET /products - Lấy danh sách sản phẩm
- GET /products/:id - Lấy chi tiết sản phẩm
- POST /products - Tạo sản phẩm mới (mod)
- PUT /products/:id - Cập nhật sản phẩm (mod)
- DELETE /products/:id - Xóa sản phẩm (admin)

3. Categories:
- GET /categories - Lấy danh sách danh mục
- GET /categories/:id - Lấy chi tiết danh mục
- POST /categories - Tạo danh mục mới (mod)
- PUT /categories/:id - Cập nhật danh mục (mod)
- DELETE /categories/:id - Xóa danh mục (admin)

4. Users:
- GET /users - Lấy danh sách users (mod)
- GET /users/:id - Lấy chi tiết user (mod)
- POST /users - Tạo user mới (admin)
- PUT /users/:id - Cập nhật user (admin)
- DELETE /users/:id - Xóa user (admin)

5. Roles:
- GET /roles - Lấy danh sách roles
- POST /roles - Tạo role mới (admin)
- PUT /roles/:id - Cập nhật role (admin)
- DELETE /roles/:id - Xóa role (admin)
=======
# VoGiaDuy_6533
>>>>>>> c7d8d92fd6ee5dca3197a14c664de339a142ccc6
