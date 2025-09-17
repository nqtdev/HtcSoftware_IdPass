// @ Thông tin nghị quyết 57
import anh1 from 'assets/nq57/anhhiephoi2.webp'
import anh3 from 'assets/nq57/anhhiephoi3.webp'
import ListNews from './news/listNews'

const Introduction = () => {
  return (
    <>
      {/* <div className='w-full h-56 flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-300'>
        <h2 className='text-white text-center text-5xl font-roboto'>HTC Tin Tức</h2>
      </div> */}
      <div className='xl:grid xl:grid-cols-10 xxl:px-64 xl:px-32 px-5 '>
        <div className='col-span-7 p-2 xl:p-10'>
          <h2 className='text-3xl font-roboto'>
            Bộ trưởng Lương Tam Quang giữ chức Chủ tịch Hiệp hội Dữ liệu Quốc gia
          </h2>
          <h3 className='my-2 font-roboto ' style={{textIndent: '.5rem'}}>
            22/03/2025 - Chính thức ra mắt Hiệp hội Dữ liệu Quốc gia (NDA). Bộ trưởng Bộ Công an
            Lương Tam Quang được tín nhiệm bầu làm Chủ tịch NDA.
          </h3>
          <span className='font-roboto text-gray-700' style={{textIndent: '.5rem'}}>
            Hà Nội, Việt Nam - Ngày 22 tháng 3 năm 2025, Hiệp hội Dữ liệu Quốc gia (NDA) đã chính
            thức ra mắt, đánh dấu một bước tiến quan trọng trong chiến lược chuyển đổi số quốc gia
            của Việt Nam. Sự kiện trọng đại này diễn ra tại Hà Nội, thu hút sự tham gia của nhiều
            lãnh đạo cấp cao của Đảng và Nhà nước, cùng đại diện từ các hiệp hội, doanh nghiệp hoạt
            động trong lĩnh vực công nghệ và dữ liệu.
          </span>
          <img
            src={anh1}
            className='rounded-lg'
            alt='Đại tướng Lương Tam Quang, Bộ trưởng Bộ Công an được tín nhiệm bầu giữ chức Chủ tịch Hiệp hội Dữ liệu Quốc gia.'
          />
          <div className='text-center'>
            <i className='text-[.8rem] '>
              Đại tướng Lương Tam Quang, Bộ trưởng Bộ Công an được tín nhiệm bầu giữ chức Chủ tịch
              Hiệp hội Dữ liệu Quốc gia. Ảnh: Hoàng Hà.
            </i>
          </div>
          <div className='my-6'>
            <span className='font-roboto text-gray-700 '>
              Hiệp hội Dữ liệu Quốc gia được thành lập theo Quyết định số 10/QĐ-BNV ngày 10 tháng 1
              năm 2025 của Bộ Nội vụ. Với sứ mệnh kết nối các cơ quan quản lý, doanh nghiệp, tổ chức
              và cá nhân hoạt động trong lĩnh vực dữ liệu, NDA hướng đến việc xây dựng một hệ sinh
              thái dữ liệu vững mạnh, góp phần thúc đẩy phát triển kinh tế số và gia tăng giá trị dữ
              liệu trong nền kinh tế quốc dân.
            </span>
          </div>
          <img
            className='rounded-lg'
            src={anh3}
            alt='Tổng Bí thư Tô Lâm, Thủ tướng Phạm Minh Chính cùng các vị lãnh đạo Đảng, Nhà nước dự Đại hội Đại biểu toàn quốc lần thứ nhất của Hiệp hội Dữ liệu Quốc gia. '
          />

          <div className='text-center'>
            <i className='text-[.8rem] '>
              Tổng Bí thư Tô Lâm, Thủ tướng Phạm Minh Chính cùng các vị lãnh đạo Đảng, Nhà nước dự
              Đại hội Đại biểu toàn quốc lần thứ nhất của Hiệp hội Dữ liệu Quốc gia. Ảnh: Hoàng Hà
            </i>
          </div>

          <div className='my-6'>
            <span className='font-roboto text-gray-700 '>
              Phát biểu tại sự kiện, Tổng Bí thư Tô Lâm nhấn mạnh vai trò then chốt của dữ liệu
              trong kỷ nguyên số, ví dữ liệu như "máu" của nền kinh tế số. Ông cũng chỉ ra những
              thách thức hiện tại như dữ liệu phân tán, thiếu kết nối và nguồn nhân lực chất lượng
              cao còn hạn chế. Tổng Bí thư đề nghị NDA tập trung vào 7 nhiệm vụ trọng tâm để dữ liệu
              phát huy hiệu quả phục vụ sự phát triển của đất nước:
            </span>
          </div>
          <ul className='space-y-4 list-disc pl-5'>
            <li className='font-roboto text-gray-700 leading-relaxed'>
              Hoàn thiện hành lang pháp lý về dữ liệu, tạo điều kiện cho dữ liệu lưu chuyển, kết
              nối, chia sẻ và khai thác tối đa, đồng thời bảo đảm an ninh, an toàn và chủ quyền dữ
              liệu.
            </li>
            <li className='font-roboto text-gray-700 leading-relaxed'>
              Phát huy vai trò nòng cốt trong xây dựng, phát triển, khai thác và làm giàu dữ liệu
              quốc gia, tập trung vào bốn trụ cột: con người, vị trí, hoạt động và sản phẩm.
            </li>
            <li className='font-roboto text-gray-700 leading-relaxed'>
              Chủ động ứng dụng, làm chủ công nghệ dữ liệu cốt lõi như AI, dữ liệu lớn, blockchain
              và điện toán đám mây.
            </li>
            <li className='font-roboto text-gray-700 leading-relaxed'>
              Hỗ trợ xây dựng hạ tầng dữ liệu tiên tiến, bao gồm cả các trung tâm dữ liệu do Nhà
              nước và tư nhân đầu tư.
            </li>
            <li className='font-roboto text-gray-700 leading-relaxed'>
              Tăng cường hợp tác quốc tế, học hỏi kinh nghiệm và tham gia các sáng kiến toàn cầu về
              dữ liệu.
            </li>
            <li className='font-roboto text-gray-700 leading-relaxed'>
              Xây dựng cơ chế thực thi và giám sát hiệu quả dựa trên ứng dụng công nghệ số.
            </li>
            <li className='font-roboto text-gray-700 leading-relaxed'>
              Bảo mật dữ liệu, xây dựng hệ thống, sản phẩm và dịch vụ bảo mật, đồng thời hình thành
              ngành công nghiệp trong lĩnh vực này.
            </li>
          </ul>

          <div className='my-6'>
            <span className='font-roboto text-gray-700 '>
              Sự kiện ra mắt NDA quy tụ gần 400 hội viên, là các tổ chức và cá nhân hoạt động trong
              lĩnh vực dữ liệu. Đây là bước kiện toàn tổ chức quan trọng, định hướng hoạt động trong
              5 năm tới, khẳng định vai trò tiên phong của hiệp hội trong triển khai Nghị quyết 57.
            </span>
          </div>
          <div>
            <i className='text-[.5rem]'>
              Nguồn "Trung Tâm Dịch Vụ Chuyển Đổi Số - Chi Nhánh Tổng Công Ty Gtel (Gtel CDS)"
            </i>
          </div>
        </div>
        <div className='col-span-3 w-full'>
          <ListNews />
        </div>
      </div>
    </>
  )
}
export default Introduction
