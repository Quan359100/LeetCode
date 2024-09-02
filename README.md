# LeetCode Solutions

## Giới thiệu

Dự án này chứa các giải pháp cho các bài toán trên LeetCode, được triển khai bằng JavaScript. Mỗi bài toán được đặt trong thư mục `problems` với các tệp kiểm thử tương ứng trong thư mục `__tests__`. Các bài kiểm thử được viết bằng Jest để đảm bảo rằng các giải pháp đều hoạt động chính xác.

## Cấu trúc thư mục

```plaintext
├── problems/
│   ├── problem1.js
│   └── problem2.js
├── __tests__/
│   ├── problem1.test.js
│   └── problem2.test.js
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

## Các Loại hàm và cách giải quyết
1.Hashing Pattern (Hàm Băm)
Mô tả: Sử dụng một cấu trúc dữ liệu băm (hash table) để lưu trữ các giá trị đã gặp trước đó và kiểm tra xem phần bù (complement) của giá trị hiện tại có tồn tại trong hash table hay không.
Áp dụng vào Two Sum: Trong thuật toán Two Sum, bạn duyệt qua mảng và sử dụng một hash map để lưu trữ các phần tử đã gặp trước đó. Khi duyệt qua một phần tử mới, bạn tính phần bù cần thiết để đạt được target và kiểm tra xem phần bù đó có trong hash map không. Nếu có, bạn trả về cặp chỉ số tương ứng.

2.Two Pointers Pattern (Trong trường hợp mảng đã sắp xếp):
Mô tả: Sử dụng hai con trỏ, một bắt đầu từ đầu mảng và một từ cuối mảng, di chuyển dần về giữa cho đến khi tìm thấy kết quả.
Áp dụng vào Two Sum: Nếu mảng đã được sắp xếp, bạn có thể sử dụng hai con trỏ để tìm cặp số có tổng bằng target. Nếu tổng của hai con trỏ lớn hơn target, bạn di chuyển con trỏ bên phải sang trái (giảm giá trị tổng). Ngược lại, nếu tổng nhỏ hơn target, bạn di chuyển con trỏ bên trái sang phải (tăng giá trị tổng).



