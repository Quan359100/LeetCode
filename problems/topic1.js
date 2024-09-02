// Hashing Pattern (hàm băm) + Two Pointers Pattern (Trong trường hợp mảng đã sắp xếp)
function twoSum(nums, target) {
    const map = {};
    let result = []; // Dùng để lưu kết quả khi tìm thấy
    nums.forEach((num, i) => {
        const complement = target - num;
        if (map[complement] !== undefined) {
            result = [map[complement], i]; // Lưu và kết thúc vòng lặp
            return; // Chỉ thoát forEach, không phải hàm
        }
        map[num] = i;
    });
    return result; // Trả về kết quả
}
module.exports = twoSum;
