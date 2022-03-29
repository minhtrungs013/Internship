-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 21, 2022 lúc 04:18 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `internship`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `assessment`
--

CREATE TABLE `assessment` (
  `idAssessment` int(15) NOT NULL,
  `idInternshipCource` int(15) NOT NULL,
  `idInternship` int(15) NOT NULL,
  `IdMentor` int(15) NOT NULL,
  `evaluationDate` date NOT NULL,
  `report1` int(11) NOT NULL,
  `report2` int(11) NOT NULL,
  `report3` int(11) NOT NULL,
  `report4` int(11) NOT NULL,
  `finalReport` int(11) NOT NULL,
  `technicalSkill` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `candidate`
--

CREATE TABLE `candidate` (
  `idCandidate` int(15) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `idDG` int(15) NOT NULL,
  `interviewTime` time NOT NULL,
  `interviewDate` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `idMentor` int(15) NOT NULL,
  `technicalComments` varchar(255) NOT NULL,
  `technicalScore` varchar(255) NOT NULL,
  `attitude` varchar(255) NOT NULL,
  `englishCommunication` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `internshipDomain` varchar(255) NOT NULL,
  `preferredSkills` varchar(255) NOT NULL,
  `university` varchar(255) NOT NULL,
  `faculty` varchar(255) NOT NULL,
  `currentYearofStudy` varchar(255) NOT NULL,
  `studentID` varchar(255) NOT NULL,
  `preferredInternshipStartDate` date NOT NULL,
  `preferredInternshipDuration` varchar(255) NOT NULL,
  `internshipSchedule` varchar(255) NOT NULL,
  `GPA` int(15) NOT NULL,
  `idInternshipCourse` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `candidate`
--

INSERT INTO `candidate` (`idCandidate`, `fullName`, `tel`, `email`, `idDG`, `interviewTime`, `interviewDate`, `status`, `remark`, `idMentor`, `technicalComments`, `technicalScore`, `attitude`, `englishCommunication`, `comments`, `remarks`, `internshipDomain`, `preferredSkills`, `university`, `faculty`, `currentYearofStudy`, `studentID`, `preferredInternshipStartDate`, `preferredInternshipDuration`, `internshipSchedule`, `GPA`, `idInternshipCourse`) VALUES
(2, 'Lê Ngọc Huy', '3343434343', 'huy@gmail.com', 4, '10:14:25', '2022-02-14', 'Full time', 'gfgf', 1, 'fgf', 'fgfg', 'fgfg', 'fgfg', 'fgf', 'fgfg', 'fgfg', 'fgf', 'gfgfg', 'fgf', 'gfgfg', 'fgf', '2022-03-09', 'fgfg', 'fgfg', 12, 3),
(4, 'Nguyễn Hoàng Phúc', '3343434343', 'phuc@gmail.com', 3, '10:14:25', '2022-02-14', 'Full time', 'gfgf', 1, 'fgf', 'fgfg', 'fgfg', 'fgfg', 'fgf', 'fgfg', 'fgfg', 'fgf', 'gfgfg', 'fgf', 'gfgfg', 'fgf', '2022-03-09', 'fgfg', 'fgfg', 12, 2),
(5, 'Diệp Túy Dũng', '3343434343', 'hdtdung@gmail.com', 4, '10:14:25', '2022-02-14', 'Full time', 'gfgf', 1, 'fgf', 'fgfg', 'fgfg', 'fgfg', 'fgf', 'fgfg', 'fgfg', 'fgf', 'gfgfg', 'fgf', 'gfgfg', 'fgf', '2022-03-09', 'fgfg', 'fgfg', 12, 3),
(14, 'Đỗ Minh Trung', '0987654321', 'trung@gmail.com', 3, '17:00:17', '2024-02-14', 'ZX', 'zX', 3, 'zx', 'zx', 'zx', 'zx', 'zx', 'zx', 'zx', 'zxz', 'zx', 'zx', 'zx', 'zx', '0000-00-00', 'zx', 'zx', 12, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dg`
--

CREATE TABLE `dg` (
  `idDG` int(15) NOT NULL,
  `nameDG` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `dg`
--

INSERT INTO `dg` (`idDG`, `nameDG`) VALUES
(1, 'DG1'),
(2, 'DG2'),
(3, 'DG3'),
(4, 'DG4'),
(5, 'DG5'),
(6, 'DG6');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `email`
--

CREATE TABLE `email` (
  `idEmail` int(15) NOT NULL,
  `idInternship` int(15) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `internship`
--

CREATE TABLE `internship` (
  `idInternship` int(15) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `gender` bit(2) NOT NULL,
  `address` varchar(255) NOT NULL,
  `dayOfBirth` date NOT NULL,
  `university` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `idMentor` int(15) NOT NULL,
  `pcType` varchar(255) NOT NULL,
  `Toeic` varchar(255) NOT NULL,
  `internshipProject` varchar(255) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `securityTest` varchar(255) NOT NULL,
  `idInternshipCource` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `internshipcourse`
--

CREATE TABLE `internshipcourse` (
  `idInternshipCource` int(15) NOT NULL,
  `nameCourse` varchar(255) NOT NULL,
  `dateStart` date NOT NULL,
  `dateEnd` date NOT NULL,
  `status` bit(3) NOT NULL,
  `kindOfInternship` bit(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `internshipcourse`
--

INSERT INTO `internshipcourse` (`idInternshipCource`, `nameCourse`, `dateStart`, `dateEnd`, `status`, `kindOfInternship`) VALUES
(2, 'Batch 9', '2022-02-15', '2022-05-09', b'001', b'001'),
(3, 'Batch 11', '2023-02-14', '2023-05-08', b'001', b'001');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mentor`
--

CREATE TABLE `mentor` (
  `idMentor` int(15) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `dayOfBirth` date NOT NULL,
  `gender` bit(2) NOT NULL,
  `address` varchar(255) NOT NULL,
  `workplace` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `postion` varchar(255) NOT NULL,
  `idDG` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `mentor`
--

INSERT INTO `mentor` (`idMentor`, `fullName`, `dayOfBirth`, `gender`, `address`, `workplace`, `email`, `postion`, `idDG`) VALUES
(1, 'Mai Phi Hùng', '1945-02-16', b'01', 'Quy Nhơn', 'TMA', 'mphung.tma@gmail.com', 'Project Management', 4),
(2, 'Võ Văn Ý', '1945-02-16', b'01', 'Quy Nhơn', 'TMA', 'vvy.tma@gmail.com', 'Project Management', 6),
(3, 'Nguyễn Minh Chiến', '1945-02-16', b'01', 'Quy Nhơn', 'TMA', 'nmchien.tma@gmail.com', 'Scrum Master', 4);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `assessment`
--
ALTER TABLE `assessment`
  ADD PRIMARY KEY (`idAssessment`),
  ADD KEY `idInternship` (`idInternship`),
  ADD KEY `idInternshipCource` (`idInternshipCource`),
  ADD KEY `IdMentor` (`IdMentor`);

--
-- Chỉ mục cho bảng `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`idCandidate`),
  ADD KEY `idDG` (`idDG`),
  ADD KEY `idMentor` (`idMentor`),
  ADD KEY `idInternshipCourse` (`idInternshipCourse`);

--
-- Chỉ mục cho bảng `dg`
--
ALTER TABLE `dg`
  ADD PRIMARY KEY (`idDG`);

--
-- Chỉ mục cho bảng `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`idEmail`),
  ADD KEY `idInternship` (`idInternship`);

--
-- Chỉ mục cho bảng `internship`
--
ALTER TABLE `internship`
  ADD PRIMARY KEY (`idInternship`),
  ADD KEY `idMentor` (`idMentor`),
  ADD KEY `idInternshipCource` (`idInternshipCource`);

--
-- Chỉ mục cho bảng `internshipcourse`
--
ALTER TABLE `internshipcourse`
  ADD PRIMARY KEY (`idInternshipCource`);

--
-- Chỉ mục cho bảng `mentor`
--
ALTER TABLE `mentor`
  ADD PRIMARY KEY (`idMentor`),
  ADD KEY `idDG` (`idDG`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `assessment`
--
ALTER TABLE `assessment`
  MODIFY `idAssessment` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `candidate`
--
ALTER TABLE `candidate`
  MODIFY `idCandidate` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `dg`
--
ALTER TABLE `dg`
  MODIFY `idDG` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `email`
--
ALTER TABLE `email`
  MODIFY `idEmail` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `internship`
--
ALTER TABLE `internship`
  MODIFY `idInternship` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `mentor`
--
ALTER TABLE `mentor`
  MODIFY `idMentor` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `assessment`
--
ALTER TABLE `assessment`
  ADD CONSTRAINT `assessment_ibfk_1` FOREIGN KEY (`idInternship`) REFERENCES `internship` (`idInternship`),
  ADD CONSTRAINT `assessment_ibfk_2` FOREIGN KEY (`idInternshipCource`) REFERENCES `internshipcourse` (`idInternshipCource`),
  ADD CONSTRAINT `assessment_ibfk_3` FOREIGN KEY (`IdMentor`) REFERENCES `mentor` (`idMentor`);

--
-- Các ràng buộc cho bảng `candidate`
--
ALTER TABLE `candidate`
  ADD CONSTRAINT `candidate_ibfk_1` FOREIGN KEY (`idDG`) REFERENCES `dg` (`idDG`),
  ADD CONSTRAINT `candidate_ibfk_2` FOREIGN KEY (`idMentor`) REFERENCES `mentor` (`idMentor`),
  ADD CONSTRAINT `candidate_ibfk_3` FOREIGN KEY (`idInternshipCourse`) REFERENCES `internshipcourse` (`idInternshipCource`);

--
-- Các ràng buộc cho bảng `email`
--
ALTER TABLE `email`
  ADD CONSTRAINT `email_ibfk_1` FOREIGN KEY (`idInternship`) REFERENCES `internship` (`idInternship`);

--
-- Các ràng buộc cho bảng `internship`
--
ALTER TABLE `internship`
  ADD CONSTRAINT `internship_ibfk_1` FOREIGN KEY (`idMentor`) REFERENCES `mentor` (`idMentor`),
  ADD CONSTRAINT `internship_ibfk_2` FOREIGN KEY (`idInternshipCource`) REFERENCES `internshipcourse` (`idInternshipCource`);

--
-- Các ràng buộc cho bảng `mentor`
--
ALTER TABLE `mentor`
  ADD CONSTRAINT `mentor_ibfk_1` FOREIGN KEY (`idDG`) REFERENCES `dg` (`idDG`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
