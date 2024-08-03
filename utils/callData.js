
// Khai báo URL API và mảng sản phẩm
let dataJson;
// Tạo một hàm để lấy dữ liệu từ file data.json
export async function fetchData(apiUrl) {
    console.log(apiUrl)
    try {
        // Sử dụng Fetch API để lấy dữ liệu
        const response = await fetch(apiUrl);

        // Kiểm tra nếu phản hồi thành công (HTTP status code là 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("dataJson: ", dataJson);

        return data;

    } catch (error) {
        // Xử lý lỗi nếu có
        // console.error('Có lỗi xảy ra:', error);
        console.log("Có lỗi: ", error);

    }
}