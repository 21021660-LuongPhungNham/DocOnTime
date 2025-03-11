import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import doc17 from './doc17.png'
import doc18 from './doc18.png'
import doc19 from './doc19.png'
import doc20 from './doc20.png'
import doc21 from './doc21.png'
import doc22 from './doc22.png'
import doc23 from './doc23.png'
import doc24 from './doc24.png'
import doc25 from './doc25.png'
import doc26 from './doc26.png'
import doc27 from './doc27.png'
import doc28 from './doc28.png'
import doc29 from './doc29.png'
import doc30 from './doc30.png'

import Nhi_khoa from './Nhi_khoa.svg'
import Thần_kinh from './Thần_kinh.svg'
import Tiêu_hóa from './Tiêu_hóa.svg'
import Truyền_nhiễm from './Truyền_nhiễm.svg'
import Phụ_khoa from './Phụ_khoa.svg'


export const assets = {
    appointment_img,
    header_img,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Thần kinh',
        image: Thần_kinh
    },
    {
        speciality: 'Truyền nhiễm',
        image: Truyền_nhiễm
    },
    {
        speciality: 'Tiêu hóa',
        image: Tiêu_hóa
    },
    {
        speciality: 'Nhi khoa',
        image: Nhi_khoa
    },
    {
        speciality: 'Phụ khoa',
        image: Phụ_khoa
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'TS, BS. Phạm Thị Quỳnh',
        image: doc1,
        speciality: 'Phụ khoa',
        degree: 'Thạc sĩ Chuyên ngành Sản phụ, Bác sĩ Y khoa tại Liên Xô',
        experience: '20 năm',
        about: 'Nguyên Trưởng khoa Sản, Bệnh viện E,tốt nghiệp Bác sĩ Y khoa tại Đại học Y Rostov sông Đông - Liên Xô cũ',
        fees: '500.000',
        address: {
            line: 'Bệnh viện E, 87-89 Trần Cung, Nghĩa Tân, Cầu Giấy, Hà Nội'
        }
    },
    {
        _id: 'doc2',
        name: ' TS, BS. Nguyễn Bá Phê',
        image: doc2,
        speciality: 'Phụ khoa',
        degree: 'Thạc sĩ Y khoa, Bác sĩ chuyên khoa Sản phụ khoa',
        experience: '40 năm',
        about: 'Nguyên Phó trưởng Khoa Phụ ngoại, Bệnh viện Phụ sản Trung ương, có nhiều năm kinh nghiệm trong chẩn đoán và điều trị các bệnh lý phụ khoa phức tạp.',
        fees: '500.000',
        address: {
            line: 'Bệnh viện Phụ sản Trung ương, 43 Tràng Thi, Hoàn Kiếm, Hà Nội'
        }
    },
    {
        _id: 'doc3',
        name: 'BS. Ngô Thu Hà',
        image: doc3,
        speciality: 'Phụ khoa',
        degree: 'Sản phụ khoa và Vô sinh - Hiếm muộn',
        experience: '4 năm',
        about: 'Nhiều năm kinh nghiệm trong khám và điều trị các bệnh lý về Sản phụ khoa và Vô sinh - Hiếm muộn.',
        fees: '300.000',
        address: {
            line: 'Bệnh viện Chuyên khoa Nam học & Hiếm muộn Việt Bỉ, 23 Nguyễn Văn Trỗi, Phương Liệt, Thanh Xuân, Hà Nội'
        }
    },
    {
        _id: 'doc4',
        name: 'BS. Văn Phụng Thống',
        image: doc4,
        speciality: 'Phụ khoa',
        degree: 'Bác sĩ Chuyên khoa II Sản phụ khoa',
        experience: '35 năm',
        about: 'Nguyên Trưởng khoa Phụ Bệnh viện Từ Dũ, hiện là Giám đốc chuyên môn - Trưởng khoa phụ sản tại Bệnh viện Phương Nam.',
        fees: '1000.000',
        address: {
            line: 'Bệnh viện Phương Nam, số 2 Nguyễn Lương Bằng, Phường Tân Phú, Quận 7, TP HCM'
        }
    },
    {
        _id: 'doc5',
        name: 'BS. Nguyễn Hữu Cốc',
        image: doc5,
        speciality: 'Phụ khoa',
        degree: 'Danh hiệu Thầy thuốc Ưu tú',
        experience: '24 năm',
        about: 'Nguyên Phó Khoa Đẻ, Bệnh viện Phụ Sản Trung ương; Nguyên giảng viên cao cấp - Phó trưởng Bộ môn Phụ Sản, Đại học Y Hà Nội.',
        fees: '500.000',
        address: {
            line: 'Bệnh viện Đa khoa Bảo Sơn 2, số 52 Nguyễn Chí Thanh - Đống Đa - Hà Nội'
        }
    },
    {
        _id: 'doc6',
        name: 'BS. Phạm Thị Phương Ánh',
        image: doc6,
        speciality: 'Phụ khoa',
        degree: 'Chuyên khoa Sản phụ khoa',
        experience: '20 năm',
        about: 'Bác sĩ chuyên khoa Sản phụ khoa tại Phòng khám DHA Healthcare, với 20 năm kinh nghiệm trong khám và điều trị bệnh lý Sản phụ khoa.',
        fees: '150.000',
        address: {
            line: 'Phòng khám Đa khoa DHA Healthcare,221-221 Bis Nguyễn Thị Minh Khai, P Nguyễn Cư Trinh, Quận 1, Thành phố Hồ Chí Minh'
        }
    },
    {
        _id: 'doc7',
        name: 'BS. Luyện Thị Ngọc Dung',
        image: doc7,
        speciality: 'Phụ khoa',
        degree: 'Bác sĩ khoa Sản phụ khoa - Hiếm muộn',
        experience: '6 năm',
        about: 'Hiện là bác sĩ khoa Sản phụ khoa - Hiếm muộn, Bệnh viện Nam học - Hiếm muộn Việt Bỉ. Thành viên Hội Nội tiết sinh sản và Vô sinh Thành phố Hồ Chí Minh.',
        fees: '200.000',
        address: {
            line: 'Bệnh viện Chuyên khoa Nam học & Hiếm muộn Việt Bỉ, 23 Nguyễn Văn Trỗi, Phương Liệt, Thanh Xuân, Hà Nội'
        }
    },
    {
        _id: 'doc8',
        name: 'BS. Trần Ngọc An',
        image: doc8,
        speciality: 'Phụ khoa',
        degree: 'MBBS',
        experience: ' 30 năm',
        about: '',
        fees: '300.000',
        address: {
            line: 'Bệnh viện Đại học Y Dược 120-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM'
        }
    },
    {
        _id: 'doc9',
        name: 'BS. Nguyễn Thị Anh Thư',
        image: doc9,
        speciality: 'Phụ khoa',
        degree: '',
        experience: '20 năm',
        about: 'Bác sĩ có hơn 20 năm kinh nghiệm trong lĩnh vực sản phụ khoa, chuyên gia trong lĩnh vực Chăm sóc sức khỏe sinh sản và Chẩn đoán hình ảnh thai nhi, đặc biệt về khảo sát dị tật thai nhi.',
        fees: '350.000',
        address: {
            line: 'Phòng Khám Sản Phụ Khoa Chuyên Nghiệp 43 Nguyễn Khang, số 43 Nguyễn Khang, phường Trung Hòa, quận Cầu Giấy, TP Hà Nội'
        }
    },
    {
        _id: 'doc10',
        name: 'BS. Đặng Văn Hà',
        image: doc10,
        speciality: 'Phụ khoa',
        degree: 'Bác sĩ chuyên khoa Sản phụ khoa, Nam khoa, Hỗ trợ sinh sản',
        experience: '8 năm',
        about: 'Phó Giám đốc Trung tâm Hỗ trợ Sinh sản IVF Bệnh viện An Việt. Bác sĩ từng công tác tại Bệnh viện Hòe Nhai, Trung tâm Hỗ trợ Sinh sản & Nam học Đức Phúc.',
        fees: '500.000',
        address: {
            line: 'Bệnh viện An Việt, 1E Trường Chinh, Thanh Xuân, Hà Nội'
        }
    },
    {
        _id: 'doc11',
        name: 'BS. Nguyễn Thị Hoài An',
        image: doc11,
        speciality: 'Nhi khoa',
        degree: 'Nguyên Trưởng khoa Tai Mũi Họng Trẻ Em, Bệnh viện Tai Mũi Họng Trung ương',
        experience: '25 năm',
        about: 'Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em.',
        fees: '400.000',
        address: {
            line: 'Bệnh viện Đa khoa An Việt, Số 1E Trường Chinh, Thanh Xuân, Hà Nội'
        }
    },
    {
        _id: 'doc12',
        name: 'BS. Đoàn Thị Lan',
        image: doc12,
        speciality: 'Nhi khoa',
        degree: 'Thạc sĩ, Bác sĩ',
        experience: '18 năm',
        about: 'Bác sĩ tư vấn dinh dưỡng cho phụ nữ mang thai và trẻ em.',
        fees: '500.000',
        address: {
            line: 'Bệnh viện Đa khoa Bảo Sơn 2, Số 52 Nguyễn Chí Thanh - Đống Đa - Hà Nội'
        }
    },
    {
        _id: 'doc13',
        name: 'BS. Nguyễn Ngọc Phương',
        image: doc13,
        speciality: 'Nhi khoa',
        degree: '',
        experience: '10 năm',
        about: 'Từng công tác tại khoa Nhi, Bệnh viện Nguyễn Tri Phương và tại Trung tâm Dinh dưỡng Nutrihome TP. HCM',
        fees: '200.000',
        address: {
            line: 'Phòng khám Đa khoa SIM Medical Center, toà nhà Richstar 2 - RS5, 239-241 đường Hòa Bình, P. Hiệp Tân, Q.Tân Phú, TP. HCM',
        }
    },
    {
        _id: 'doc14',
        name: 'BS. Nguyễn Xuân Tài',
        image: doc14,
        speciality: 'Nhi khoa',
        degree: 'Bác sĩ chuyên khoa I',
        experience: '13 năm',
        about: 'Từng công tác tại Bệnh viện Nhi đồng 1, Bệnh viện Nhi đồng Thành phố, hiện là Bác sĩ Nhi khoa tại Bệnh viện Quốc tế City',
        fees: '400.000',
        address: {
            line: ' Bệnh viện Quốc tế City, 3 Đường Số 17A, Bình Trị Đông B, Bình Tân, TP. Hồ Chí Minh',
        }
    },
    {
        _id: 'doc15',
        name: 'BS. Nguyễn Thị Hồng Cẩm',
        image: doc15,
        speciality: 'Nhi khoa',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '15 năm',
        about: 'Gần 15 năm kinh nghiệm tầm soát và điều trị các bệnh lý Tim mạch - Hồi sức Tim - Hồi sức ngoại Nhi',
        fees: '400.000',
        address: {
            line: 'Bệnh viện Quốc tế City, 3 Đường Số 17A, Bình Trị Đông B, Bình Tân, TP. Hồ Chí Minh',
        }
    },
    {
        _id: 'doc16',
        name: 'BS. Nguyễn Tiến Thành',
        image: doc16,
        speciality: 'Da liễu',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '15 năm',
        about: 'Hơn 15 năm kinh nghiệm trong chuyên khoa Da liễu và thế mạnh chính về Laser sắc tố da,phó Trưởng phòng Quản lý chất lượng, Bệnh viện Da liễu Trung ương, bác sĩ khoa Laser và săn sóc da, Bệnh viện Da liễu Trung ương',
        fees: '250.000',
        address: {
            line: 'Phòng khám Chuyên khoa Da liễu Maia&Maia,21 Hoàng Cầu, phường Ô Chợ Dừa, quận Đống Đa, Hà Nội',
        }
    },
    {
        _id: 'doc17',
        name: 'BS. Trương Thị Tuyết Hoa',
        image: doc17,
        speciality: 'Da liễu',
        degree: 'Bác sĩ chuyên khoa I',
        experience: '30 năm',
        about: 'Gần 30 năm kinh nghiệm lĩnh vực Nội Tổng quát - Da liễu, hiện công tác tại Phòng khám Bệnh viện Đại học Y Dược 1, từng công tác tại Bệnh viện Trưng Vương',
        fees: '200.000',
        address: {
            line: 'Phòng khám Bệnh viện Đại học Y Dược 1, 20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM',
        }
    },
    {
        _id: 'doc18',
        name: 'BS. Nguyễn Hải An',
        image: doc18,
        speciality: 'Da liễu',
        degree: 'Bác sĩ chuyên khoa I',
        experience: '10 năm',
        about: 'Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Da liễu - Đại học Y Hà Nội',
        fees: '400.000',
        address: {
            line: 'Bệnh viện Đa khoa Bảo Sơn 2, Số 52 Nguyễn Chí Thanh - Đống Đa - Hà Nội',
        }
    },
    {
        _id: 'doc19',
        name: 'BS. Bùi Văn Đức',
        image: doc19,
        speciality: 'Da liễu',
        degree: 'Bác sĩ chuyên khoa I',
        experience: '15 năm',
        about: 'Nguyên Phó Chủ nhiệm bộ môn Da Liễu, Đại Học Y Dược TP.HCM, giảng viên Trường Đại học Y Dược TP.HCM, nhiều năm công tác tại khoa Da liễu, Bệnh viện Đại học Y Dược TP.HCM',
        fees: '350.000',
        address: {
            line: 'Phòng khám Đa khoa Quốc tế Sài Gòn - Quận 1, 9-11-13-15 Trịnh Văn Cấn, Phường Cầu Ông Lãnh, Quận 1, TP. HCM',
        }
    },
    {
        _id: 'doc20',
        name: 'BS. Nguyễn Văn Doanh',
        image: doc20,
        speciality: 'Thần kinh',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '40 năm',
        about: 'Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Thu Cúc, nguyên chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị Việt Xô',
        fees: '200.000',
        address: {
            line: 'Hệ thống Y tế Thu Cúc cơ sở Thụy Khuê, 286 Thụy Khuê, quận Tây Hồ, Hà Nội',
        }
    },
    {
        _id: 'doc21',
        name: 'BS. Võ Thị Ngọc Thu',
        image: doc21,
        speciality: 'Thần Kinh',
        degree: 'Bác sĩ chuyên khoa I',
        experience: '30 năm',
        about: 'Từng công tác tại nhiều bệnh viện lớn: Bệnh viện Phục hồi chức năng – Điều trị bệnh nghề nghiệp, Bệnh viện An Bình, Bệnh viện Nguyễn Trãi',
        fees: '300.000',
        address: {
            line: 'Bệnh viện Đa khoa Quốc Tế Nam Sài Gòn, Số 88, Đường số 8, Khu dân cư Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, TP. Hồ Chí Minh',
        }
    },
    {
        _id: 'doc22',
        name: 'BS. Đỗ Anh Vũ',
        image: doc22,
        speciality: 'Thần kinh',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '20 năm',
        about: 'Phó trưởng khoa Ngoại thần kinh, Bệnh viện Đa khoa Nam Sài Gòn',
        fees: '300.000',
        address: {
            line: 'Bệnh viện Đa khoa Quốc Tế Nam Sài Gòn, Số 88, Đường số 8, Khu dân cư Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, TP. Hồ Chí Minh',
        }
    },
    {
        _id: 'doc23',
        name: 'BS. Trần Thị Mai Thi',
        image: doc23,
        speciality: 'Thần kinh',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '20 năm',
        about: '20 năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Thần kinh, từng công tác nhiều năm tại khoa Nội Thần kinh, Bệnh viện Nhân dân 115',
        fees: '400.000',
        address: {
            line: 'Bệnh viện Quốc tế City, 3 Đường Số 17A, Bình Trị Đông B, Bình Tân, Thành phố Hồ Chí Minh',
        }
    },
    {
        _id: 'doc24',
        name: 'BS. Hà Văn Quyết',
        image: doc24,
        speciality: 'Tiêu hóa',
        degree: 'Bác sĩ chuyên khoa',
        experience: '35 năm',
        about: 'Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa, nguyên Giám đốc Bệnh viện Đại học Y Hà Nội',
        fees: '500.000',
        address: {
            line: 'Bệnh viện Ung bướu Hưng Việt, 34 Đại Cồ Việt, Hai Bà Trưng, Hà Nội',
        }
    },
    {
        _id: 'doc25',
        name: 'BS. Hứa Thúy Vi',
        image: doc25,
        speciality: 'Tiêu hóa',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '15 năm',
        about: 'Giám đốc Phòng khám Chuyên khoa Nội An Phước, bác sĩ chuyên khoa Tiêu hóa - Gan mật - Nội soi tiêu hóa',
        fees: '400.000',
        address: {
            line: 'Phòng khám Chuyên khoa Nội An Phước, 391/8 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh',
        }
    },
    {
        _id: 'doc26',
        name: 'BS.Lê Xuân Tài',
        image: doc26,
        speciality: 'Tiêu hóa',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '10 năm',
        about: 'Hơn 10 năm kinh nghiệm trong lĩnh vực bệnh lý hậu môn trực tràng, điều trị thành công hơn 10.000 ca bệnh mọi cấp độ',
        fees: '400.000',
        address: {
            line: 'Phòng khám chuyên khoa điều trị bệnh trĩ An Tri, 125 Đại La - Hai Bà Trưng - Hà Nội',
        }
    },
    {
        _id: 'doc27',
        name: 'BS. Nguyễn Lưu Phương',
        image: doc27,
        speciality: 'Tiêu hóa',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '40 năm',
        about: 'Trưởng Phòng khám Đa khoa thuộc Bệnh viện Bộ Phát triển Nông nghiệp Nông thôn, hơn 40 năm kinh nghiệm trong lĩnh vực Tiêu hóa',
        fees: '400.000',
        address: {
            line: 'Phòng khám Đa khoa Meditec, 52 Bà Triệu - Hoàn Kiếm - Hà Nội',
        }
    },
    {
        _id: 'doc28',
        name: 'BS. Ngô Thị Kim Cúc',
        image: doc28,
        speciality: 'Truyền nhiễm',
        degree: 'Bác sĩ chuyên khoa II',
        experience: '15 năm',
        about: 'Bác sĩ có nhiều năm kinh nghiệm trong khám và điều trị bệnh lý Truyền nhiễm, bác sĩ từng Công tác trong lĩnh vực Hồi sức cấp cứu - Chuyên khoa Truyền Nhiễm và các bệnh Nhiệt đới, Bệnh Viện Bệnh Nhiệt đới',
        fees: '400.000',
        address: {
            line: 'Phòng khám Đa khoa Quốc Tế Yersin, số 10 Trương Định, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh',
        }
    },
    {
        _id: 'doc29',
        name: 'BS. Nguyễn Thị Hồng Cẩm',
        image: doc29,
        speciality: 'Truyền nhiễm',
        degree: 'Thầy thuốc ưu tú',
        experience: '40 năm',
        about: 'Giám đốc Phòng khám Đa khoa Quốc tế Thu Cúc, hơn 40 năm kinh nghiệm khám và chữa các bệnh nội khoa',
        fees: '350.000',
        address: {
            line: 'Hệ thống Y tế Thu Cúc cơ sở Trần Duy Hưng, 216 Trần Duy Hưng, Cầu Giấy, Hà Nội',
        }
    },
    {
        _id: 'doc30',
        name: 'BS. Nguyễn Quang Tuấn',
        image: doc30,
        speciality: 'Truyền nhiễm',
        degree: 'Thầy thuốc ưu tú',
        experience: '40 năm',
        about: 'Nguyên Trưởng khoa Truyền nhiễm Bệnh viện Bạch Mai, dược phong tặng danh hiệu Thầy thuốc ưu tú, hơn 40 năm kinh nghiệm khám và điều trị tại chuyên khoa Nội Truyền nhiễm',
        fees: '300.000',
        address: {
            line: 'Hệ thống Y tế Thu Cúc cơ sở Trần Duy Hưng, 216 Trần Duy Hưng, Cầu Giấy, Hà Nội',
        }
    },
]