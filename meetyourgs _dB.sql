-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2021 at 10:14 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetyourgs`
--

-- --------------------------------------------------------

--
-- Table structure for table `agrimaterial`
--

CREATE TABLE `agrimaterial` (
  `addeddate` date NOT NULL,
  `materialid` int(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL,
  `status` int(12) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agrimaterial`
--

INSERT INTO `agrimaterial` (`addeddate`, `materialid`, `description`, `quantity`, `status`) VALUES
('2021-09-20', 25, '10mm Rods for Lake Renovation ', '290', 1),
('0000-00-00', 26, 'Lake Renovation Project', '250', 1),
('2021-09-20', 9, 'For dry ration distribution ', '250', 1),
('2021-09-20', 9, 'Tea Planters', '120', 1),
('2021-09-21', 10, 'Tea Planters', '100', 1),
('2021-09-20', 11, 'Shovel, Pickaxe, Hoe, Rake, Fork and Hammer. Needs to distribute these tools to the general public', '250', 1);

--
-- Triggers `agrimaterial`
--
DELIMITER $$
CREATE TRIGGER `Add Agri Material` BEFORE INSERT ON `agrimaterial` FOR EACH ROW UPDATE newagrimaterial SET quantity = quantity+NEW.quantity WHERE materialid = NEW.materialid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `availability`
--

CREATE TABLE `availability` (
  `availID` int(50) NOT NULL,
  `gsname` text NOT NULL,
  `date` date NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `maxCount` int(20) NOT NULL,
  `currentCount` int(20) NOT NULL,
  `description` varchar(250) NOT NULL DEFAULT 'Refer Necessary documents for more details.',
  `status` varchar(20) NOT NULL DEFAULT 'avail'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `availability`
--

INSERT INTO `availability` (`availID`, `gsname`, `date`, `startTime`, `endTime`, `maxCount`, `currentCount`, `description`, `status`) VALUES
(1, 'Dini', '2021-09-21', '09:25:00', '11:25:00', 8, 3, 'Please be on time', 'avail'),
(2, 'Dini', '2021-09-21', '09:45:00', '12:50:00', 10, 0, 'Please be on time', 'avail'),
(3, 'Dini', '2021-09-22', '09:45:00', '12:45:00', 10, 1, 'Please be on time', 'avail'),
(4, 'Dini', '2021-09-21', '09:50:00', '11:50:00', 10, 1, 'Hii', 'avail');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `bookID` int(20) NOT NULL,
  `nic` varchar(12) NOT NULL,
  `name` text NOT NULL,
  `home_no` varchar(50) NOT NULL,
  `address` varchar(250) NOT NULL,
  `phone` int(10) NOT NULL,
  `email` varchar(100) NOT NULL,
  `topic` varchar(200) NOT NULL,
  `book_status` varchar(20) NOT NULL,
  `availID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`bookID`, `nic`, `name`, `home_no`, `address`, `phone`, `email`, `topic`, `book_status`, `availID`) VALUES
(1, '', '', '', '', 0, '', '', 'Cancelled', 1),
(2, '982536147V', 'Mohamed Salman', '169', 'Gampola Road, Hapugastalawa', 768683353, 'mohamandeen@gmail.', 'Get Signature', 'Confirmed', 1),
(3, '741852963V', ' Salman', '176', ' Hapugastalawa, ', 768683353, 'dileeesh@gmail.com', 'Pension Inquiry', 'Confirmed', 1),
(4, '963852741V', 'Malshan', '145', ' Nawalapitiya Road, Gampola', 746325984, 'malshan@gmail.com', 'Get Residential Clearance', 'Confirmed', 3),
(5, '987456321V', 'Kireeeja', '154', 'Nuwara-Eliya Road , Gampola', 753245698, 'kireeja@gmail.com', 'Apply for NIC Clearance', 'Confirmed', 4);

--
-- Triggers `bookings`
--
DELIMITER $$
CREATE TRIGGER `cancel_book` BEFORE UPDATE ON `bookings` FOR EACH ROW IF NEW.book_status="Declined" THEN 
UPDATE availability SET currentCount = currentCount-1 WHERE availID=NEW.availID;
END IF
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `insert_book` BEFORE INSERT ON `bookings` FOR EACH ROW UPDATE availability SET currentCount = currentCount+1 WHERE availID=NEW.availID
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `book_topics`
--

CREATE TABLE `book_topics` (
  `ID` int(20) NOT NULL,
  `topic` text NOT NULL,
  `duration` time NOT NULL,
  `mainDoc` varchar(500) NOT NULL,
  `subDoc` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book_topics`
--

INSERT INTO `book_topics` (`ID`, `topic`, `duration`, `mainDoc`, `subDoc`) VALUES
(1, 'Submit Forms', '00:10:00', 'NIC and fully completed forms', 'Other required forms fully filled forms'),
(2, 'Get Signature', '00:10:00', 'NIC and fully completed forms', 'Other required forms fully filled forms'),
(3, 'Pension Inquiry', '00:20:00', 'NIC, Pension book and Birth certificate', 'Other required forms fully filled forms'),
(4, 'Voter List Alteration', '00:20:00', 'NIC and Birth certificate', 'Other required forms fully filled forms'),
(5, 'Get Vehicle Permit Clearance', '00:20:00', 'NIC, vehicle book, Insurance book', 'Other required forms fully filled forms'),
(6, 'Get Residential Clearance', '00:20:00', 'NIC, Proof of residence', 'Other required forms fully filled forms'),
(7, 'Get Character Certificate', '00:30:00', 'NIC, Proof of residence', 'Other required forms fully filled forms'),
(8, 'Apply for NIC Clearance', '00:30:00', 'Birth Certificate and 6 passport size photos', 'Other required forms fully filled forms'),
(9, 'To Donate Materials', '00:20:00', 'NIC, Material details, Purchase invoice', 'Other required forms fully filled forms'),
(10, 'To Donate Money', '00:20:00', 'NIC', 'Other required forms fully filled forms'),
(11, 'Tree cutting clearance', '00:10:00', 'NIC, Tree cutting permit/ filled Application', 'Other required forms fully filled forms');

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE `complaint` (
  `complaintID` int(10) NOT NULL,
  `topic` varchar(150) NOT NULL,
  `problem` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `time` time(6) NOT NULL,
  `userID` int(10) NOT NULL,
  `feedback` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`complaintID`, `topic`, `problem`, `date`, `time`, `userID`, `feedback`) VALUES
(1001, 'Temple issue', 'Leaving garbage closeby', '2021-09-08', '16:30:00.000000', 3, 'Thank you for the insformation'),
(1002, 'Payment issue', 'Healthcare payments are not suffficient', '2021-08-09', '18:12:27.000000', 1, ''),
(1003, 'Disaster relief', 'products are not available', '2021-09-02', '19:18:17.000000', 1, ''),
(1004, 'Less covid vaccines', 'More number of people who are not vaccinated', '2021-08-31', '09:00:00.000000', 3, '  '),
(1005, 'Forest fire', 'Due to forest fire, the farms are destroyed', '2021-09-06', '12:12:06.000000', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `constsmaterial`
--

CREATE TABLE `constsmaterial` (
  `addeddate` date NOT NULL,
  `materialid` int(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL,
  `status` int(12) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `constsmaterial`
--

INSERT INTO `constsmaterial` (`addeddate`, `materialid`, `description`, `quantity`, `status`) VALUES
('2021-09-20', 25, '10mm Rods for Lake Renovation ', '290', 1),
('2021-09-20', 26, 'Lake Renovation Project', '200', 1),
('2021-09-21', 27, 'Stock', '150', 0),
('2021-09-21', 27, 'Stock', '150', 0),
('2021-09-20', 28, 'Lake Renovation ', '150', 0),
('2021-09-21', 29, 'Renovation ', '100', 1);

--
-- Triggers `constsmaterial`
--
DELIMITER $$
CREATE TRIGGER `Add Const Material` BEFORE INSERT ON `constsmaterial` FOR EACH ROW UPDATE newconstmaterial SET quantity = quantity+NEW.quantity WHERE materialid = NEW.materialid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `date` date NOT NULL,
  `donation_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `donation_amt` int(15) NOT NULL,
  `description` varchar(500) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phoneno` int(12) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donations`
--

INSERT INTO `donations` (`date`, `donation_id`, `first_name`, `last_name`, `donation_amt`, `description`, `address`, `city`, `country`, `phoneno`, `email`) VALUES
('2021-09-19', 2, 'Mohamed', 'Salman', 25000, 'For the purchasing ofCOVID 19 Relief Packages', 'Gampola Road, Hapugastalawa, Nawalapitiya', 'Hapugastalawa', 'Sri Lanka', 768683353, 'mohamedsalmandeen@gmail.com'),
('2021-09-19', 3, 'Maheshi', 'Yatipansalawa', 125000, 'Purchasing of dry rations for COVID 19 effected people', 'No 58, Nuwara-Eliya Road', 'Gampola', 'Sri Lanka', 765369973, 'maheshiyatipansalawa@gmail.com'),
('2021-09-20', 4, 'Mohamed', 'Salman', 15000, 'COVID 19 ', 'Gampola Road, Hapugastalawa, Nawalapitiya', 'Hapugastalawa', 'Sri Lanka', 768683353, 'mohamedsalmandeen@gmail.com'),
('2021-09-21', 5, 'Mohamed', 'Salman', 15500, 'Renovation', 'Gampola Road, Hapugastalawa, Nawalapitiya', 'Hapugastalawa', 'Sri Lanka', 768683353, 'mohamedsalmandeen@gmail.com'),
('2021-09-21', 6, 'Mohamed', 'Salman', 14000, 'Covid 19 Relief', 'Gampola Road, Hapugastalawa, Nawalapitiya', 'Hapugastalawa', 'Sri Lanka', 768683353, 'mohamedsalmandeen@gmail.com'),
('2021-09-21', 7, 'Mohamed', 'Salman', 14000, 'lkjhgfdsa', 'Gampola Road, Hapugastalawa, Nawalapitiya', 'Hapugastalawa', 'Sri Lanka', 768683353, 'mohamedsalmandeen@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `finance`
--

CREATE TABLE `finance` (
  `date` date NOT NULL,
  `transectionID` int(12) NOT NULL,
  `receiptno` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `income` int(100) DEFAULT NULL,
  `expense` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `finance`
--

INSERT INTO `finance` (`date`, `transectionID`, `receiptno`, `description`, `income`, `expense`) VALUES
('2021-09-20', 1, '1254G', 'Reimbursement from Government', 54500, NULL),
('2021-09-20', 2, '325', 'Expense on Lunch', NULL, 2450),
('2021-09-20', 4, '326', 'Photocopy machine repair', NULL, 4500),
('2021-09-20', 5, '327', 'Purchasing of Booklets', NULL, 1000),
('2021-09-20', 6, '328', 'Stationary purchases', NULL, 575),
('2021-09-21', 7, '450', 'Lunch', NULL, 1250);

-- --------------------------------------------------------

--
-- Table structure for table `formtemplate`
--

CREATE TABLE `formtemplate` (
  `formID` int(20) NOT NULL,
  `formTopic` varchar(50) NOT NULL,
  `file` text NOT NULL,
  `UploadDate` date NOT NULL,
  `expDate` date NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'Inactive'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `formtemplate`
--

INSERT INTO `formtemplate` (`formID`, `formTopic`, `file`, `UploadDate`, `expDate`, `description`, `status`) VALUES
(5, 'Pension Details', '581256Pension_Form.pdf', '0000-00-00', '0000-00-00', 'Hii', 'Active'),
(6, 'Vaccine Detailss', '591928Vaccine Notice - Students.pdf', '0000-00-00', '0000-00-00', 'Hello', 'Active'),
(7, 'Birth certficate details form', '754065Birth_certificate_form.pdf', '2021-09-14', '2021-09-15', 'How u', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `forumpost`
--

CREATE TABLE `forumpost` (
  `postID` int(20) NOT NULL,
  `postText` varchar(250) NOT NULL,
  `topic` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `emailID` varchar(50) NOT NULL,
  `comments` varchar(150) NOT NULL,
  `rate` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fund`
--

CREATE TABLE `fund` (
  `date` date NOT NULL,
  `transectionID` int(12) NOT NULL,
  `fundID` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `debit` varchar(100) DEFAULT NULL,
  `credit` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fund`
--

INSERT INTO `fund` (`date`, `transectionID`, `fundID`, `description`, `debit`, `credit`) VALUES
('2021-09-18', 1, '1324F', 'Lake Renovation Project', '1200000', NULL),
('2021-09-18', 2, '1324F', 'Lake Renovation Project', NULL, '125000'),
('2021-09-19', 3, '1324F', 'Lake Renovation Project', NULL, '140000');

-- --------------------------------------------------------

--
-- Table structure for table `newagrimaterial`
--

CREATE TABLE `newagrimaterial` (
  `materialid` int(12) NOT NULL,
  `materialname` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `newagrimaterial`
--

INSERT INTO `newagrimaterial` (`materialid`, `materialname`, `quantity`) VALUES
(9, 'Uriya', 358),
(10, 'sulphate of ammonia', 100),
(11, 'Agriculture Tools', 246);

-- --------------------------------------------------------

--
-- Table structure for table `newconstmaterial`
--

CREATE TABLE `newconstmaterial` (
  `materialid` int(100) NOT NULL,
  `materialname` varchar(100) NOT NULL,
  `quantity` varchar(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `newconstmaterial`
--

INSERT INTO `newconstmaterial` (`materialid`, `materialname`, `quantity`) VALUES
(25, 'Reinforcement', '290'),
(26, 'Cement', '230'),
(27, '6ft Roofing Sheets', '163'),
(28, 'Iron Rods', '50'),
(29, '12 feet roofing sheets', '80'),
(30, 'Sal', '0');

-- --------------------------------------------------------

--
-- Table structure for table `newothermaterial`
--

CREATE TABLE `newothermaterial` (
  `materialid` int(12) NOT NULL,
  `materialname` varchar(100) NOT NULL,
  `quantity` int(12) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `newothermaterial`
--

INSERT INTO `newothermaterial` (`materialid`, `materialname`, `quantity`) VALUES
(6, 'Dry Rations', 161),
(7, 'Water Pumps', 0);

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `noticeID` int(11) NOT NULL,
  `topic` varchar(20) NOT NULL,
  `description` varchar(250) NOT NULL,
  `uploadDate` date NOT NULL,
  `expDate` date NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`noticeID`, `topic`, `description`, `uploadDate`, `expDate`, `status`) VALUES
(4, 'Sahana mallaa', 'All villagers having income below Rs.10,000 ', '2021-08-31', '2021-09-09', 'Active'),
(5, 'Pension details', 'villagers eligible to get pension ', '2021-08-31', '2021-09-07', 'Inactive'),
(6, 'Vaccination details ', 'All villagers above 30 can get vaccinated at the Central ground', '2021-07-31', '2021-12-31', 'Inactive'),
(7, 'Vaccination details ', 'All staff should get vaccinated soon', '2021-08-31', '2021-12-31', 'Active'),
(8, 'Vaccination details ', 'Please come and get vaccinated', '2021-09-21', '2021-09-22', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `othermaterial`
--

CREATE TABLE `othermaterial` (
  `addeddate` datetime NOT NULL,
  `materialid` int(100) NOT NULL,
  `description` varchar(110) NOT NULL,
  `quantity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `othermaterial`
--

INSERT INTO `othermaterial` (`addeddate`, `materialid`, `description`, `quantity`) VALUES
('2021-09-20 00:00:00', 6, 'COVID 19 Relief Packages', '150'),
('2021-09-20 00:00:00', 6, 'COVID 19 Relief Packages', '20');

--
-- Triggers `othermaterial`
--
DELIMITER $$
CREATE TRIGGER `Add Other Material` BEFORE INSERT ON `othermaterial` FOR EACH ROW UPDATE newothermaterial SET quantity = quantity+NEW.quantity WHERE materialid = NEW.materialid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `RegID` varchar(100) NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `NIC` varchar(12) NOT NULL,
  `DOB` date NOT NULL,
  `home_no` varchar(50) NOT NULL,
  `address` varchar(500) NOT NULL,
  `phone` int(10) NOT NULL,
  `type` text NOT NULL DEFAULT 'SubTenant',
  `status` varchar(25) NOT NULL DEFAULT 'live',
  `income_status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`RegID`, `fname`, `lname`, `NIC`, `DOB`, `home_no`, `address`, `phone`, `type`, `status`, `income_status`) VALUES
('CD 172', 'Madona', 'Suthasrhan', '9865215874V', '1998-08-30', '58', 'Gampola ', 714562389, 'tenant', 'Tenant', '50000'),
('CD152', 'Madona', 'Sutharthan', '2015234567V', '2015-02-08', '65', 'Gampola road kandy', 714562389, 'tenant', 'Subtenant', '15820'),
('CD153', 'Mohomed ', 'Salman', '985864521V', '1998-06-15', '26', 'Gampola Road Kandy', 778654125, 'tenant', 'Tenant', '75000'),
('CD154', 'Lishani', 'suriyampola', '582642321V', '1958-03-06', '85', 'Gampola Road Kandy', 715588654, 'tenant', 'subTenant', '54000'),
('CD155', 'Maheshi ', 'Yatiansalawa', '654852154V', '1965-02-05', '94', 'Gampola Road Kandy', 771896543, 'tenant', 'Tenant', '58000'),
('CD156', 'Hirusha', 'chamod', '8542166541V', '1985-02-05', '46', 'Gampola Road Kandy', 715965422, 'tenant', 'Tenant', '46000'),
('CD160', 'Kamaj', 'Silva', '891234567V', '1989-02-08', '42', 'Perera road, Gampola', 711234567, 'tenant', 'Subtenant', '22960'),
('CD161', 'Shehan', 'Gomez', '625434907V', '1962-04-28', '42', 'Akarawita lane, Gampola', 711823767, 'tenant', 'Subtenant', '92120'),
('CD162', 'Kaveen', 'Gamage', '961283767V', '1996-09-14', '624', 'Kahawa road, Gampola', 725849567, 'tenant', 'Subtenant', '52490'),
('CD163', 'Mudheera', 'Kariyawasam', '781212517V', '1978-02-08', '89', 'Gelioya road, Gampola', 763824967, 'tenant', 'Subtenant', '12940');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_id` int(10) NOT NULL,
  `type` varchar(225) NOT NULL,
  `title` varchar(225) NOT NULL,
  `date` date NOT NULL,
  `image` varchar(225) NOT NULL,
  `intro` varchar(225) NOT NULL,
  `read_more` varchar(225) NOT NULL,
  `status` varchar(225) NOT NULL DEFAULT 'active'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_id`, `type`, `title`, `date`, `image`, `intro`, `read_more`, `status`) VALUES
(32, 'past_project', 'Empower ', '2021-06-08', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'Empower the disabled ', 'This project is to empower the disabled in Gampola', 'inactive'),
(35, 'past_project', 'End hunger', '2021-08-27', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'jkfbkjrb kjefbkwe', 'jjdks kjc dkjbj', 'inactive'),
(28, 'past_project', 'all new', '2021-08-19', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'kjblvjbdfvssss', 'asdasdk.uhegskv.Hg.sE s>ELIVH.vieh. leisvb.IEHG?IGh/LGiGhgej gOIhgSOIEhg ', 'inactive'),
(33, 'past_project', 'Hello world', '2021-08-10', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'ygiuygiuyguyguyg', 'lknrogj io', 'inactive'),
(37, 'future_project', 'New initiative', '2021-08-26', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'mnlegn', 'nnkjnsvn;DK', 'inactive'),
(21, 'future_project', 'empower her', '2021-07-17', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'kdhu.gzirh zoihrli', 'asdasdk.uhegskv.Hg.sE s>ELIVH.vieh. leisvb.IEHG?IGh/LGiGhgej gOIhgSOIEhg ', 'inactive'),
(36, 'future_project', 'New project', '2021-09-20', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'ifdk', 'kdkkdkkkd', 'inactive'),
(38, 'present_project', 'Mushroom project', '2021-09-16', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'The newest mushroom cultivarion', 's,kfhkefekfnefr', 'inactive'),
(39, 'present_project', 'Make it easy', '2021-09-19', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'poiuytrewqasdfghjklknbvcxz', 'qwertyuiofdsdfghjkjhdsasdfghjkjgfdsasdfhjkjdsjkhfdsghjfsdf', 'inactive'),
(40, 'present_project', 'Mashroom Project', '2021-09-21', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'Helloo', 'qwertyuiofdsdfghjkjhdsasdfghjkjgfdsasdfhjkjdsjkhfdsghjfsdf', 'inactive'),
(41, 'present_project', 'Salman', '2021-09-22', 'IMG_20210408_160412_Bokeh.jpg', 'Helloo', 'qwertyuiofdsdfghjkjhdsasdfghjkjgfdsasdfhjkjdsjkhfdsghjfsdf', 'inactive'),
(42, 'present_project', 'Salman', '2021-09-22', 'IMG_20210408_160412_Bokeh.jpg', 'Helloo', 'qwertyuiofdsdfghjkjhdsasdfghjkjgfdsasdfhjkjdsjkhfdsghjfsdf', 'inactive'),
(43, 'present_project', 'Salman', '2021-09-21', 'IMG_20210408_160412_Bokeh.jpg', 'Helloo', 'qwertyuiofdsdfghjkjhdsasdfghjkjgfdsasdfhjkjdsjkhfdsghjfsdf', 'inactive'),
(44, 'present_project', 'Salman', '2021-09-21', 'IMG_20210408_160412_Bokeh.jpg', 'Helloo', 'qwertyuiofdsdfghjkjhdsasdfghjkjgfdsasdfhjkjdsjkhfdsghjfsdf', 'inactive'),
(45, 'past_project', 'Salman', '2021-09-21', 'IMG_20190922_205328.jpg', 'poiuytrewqasdfghjklknbvcxz', 'qwertyu', 'inactive'),
(46, 'present_project', 'Salman', '2021-09-22', 'Salman.png', 'Helloo', 'qwertyuiofdsdfghjkjhdsasdfghjkjgfdsasdfhjkjdsjkhfdsghjfsdfasdfghjkl', 'inactive'),
(47, 'future_project', 'Salman', '2021-09-22', 'IMG_20190922_205328.jpg', 'Helloo', 'poiu', 'inactive'),
(48, 'past_project', 'oiuytre', '2021-09-22', 'Salman.png', 'jhgfd', 'hgfds', 'inactive'),
(49, 'past_project', 'Mashroom Project', '2021-09-22', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', '', 'yhnujmtgbrfvedcwsxqaz', 'inactive'),
(50, 'past_project', 'Disaster relief ', '2021-09-21', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'Udapalatha DS quick relief to the citizens affected by the landslides.', 'Udapalatha DS managed to quickly spring into provide relief to the citizens affected by the landslides in Sinhapitiya area. The evacuated were given temporary shelter in the general hall in Doluwa area and they were provided ', 'active'),
(51, 'present_project', 'Relief to farmers', '2021-09-21', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'DS shoeing support to the local farmers.', 'The Udapalatha DS has arranaged multiple relief programs to provide seeds as well as farming equipment to the farmers for free. This program also included distribution of organic fertilizers to the farmers as they are current', 'active'),
(52, 'future_project', 'Mushroom cultivation project', '2021-10-29', 'https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg', 'The DS supporting the mushroom cultivators.', 'The cultivators are motivated to continue their mushroom cultivations during the COVID-19 to continue earning a livelihood for their families. The DS has arranged multiple knowledge sessions for the cultivators which were hel', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `query`
--

CREATE TABLE `query` (
  `queryID` int(20) NOT NULL,
  `queryMessage` varchar(250) NOT NULL,
  `response` varchar(200) NOT NULL,
  `genmessage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sms`
--

CREATE TABLE `sms` (
  `smsID` int(11) NOT NULL,
  `topic` varchar(20) NOT NULL,
  `description` varchar(400) NOT NULL,
  `uploadDate` date NOT NULL,
  `phone` int(12) NOT NULL,
  `type` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'Not-Sent'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sms`
--

INSERT INTO `sms` (`smsID`, `topic`, `description`, `uploadDate`, `phone`, `type`, `status`) VALUES
(1, 'Vaccination details ', 'All above 60 are expected to come ', '2021-09-01', 0, 'voters', 'Sent'),
(2, 'Sahana malla', 'hi get sahana malla', '2021-09-05', 0, 'voters', 'Sent'),
(3, 'Vaccination details ', 'vaccine available for 30+', '2021-09-05', 0, 'voters', 'Sent'),
(4, 'Sahana malla', 'Sahana malla for all low income holders', '2021-09-21', 0, 'voters', 'Sent'),
(5, 'Sahana malla', 'sahana', '2021-09-21', 0, 'voters', 'Sent'),
(6, 'Sahana malla', 'hello', '2021-09-22', 0, 'voters', 'Not-Sent'),
(7, 'Company Meeting ', 'at 10', '2021-09-21', 0, 'All Tenants', 'Sent'),
(8, 'Sahana Mallaa', 'We Distribute Sahana Malla', '2021-09-19', 0, 'Low Income Villagers', 'Sent');

-- --------------------------------------------------------

--
-- Table structure for table `supplyagrimaterial`
--

CREATE TABLE `supplyagrimaterial` (
  `supplieddate` date NOT NULL,
  `materialid` int(12) NOT NULL,
  `name` varchar(110) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `supplyagrimaterial`
--

INSERT INTO `supplyagrimaterial` (`supplieddate`, `materialid`, `name`, `description`, `quantity`) VALUES
('2021-09-20', 9, 'Linga', 'Tea Planter', '12'),
('2021-09-20', 9, 'Malaya', 'Tea Planter', '12'),
('2021-09-21', 11, 'Sahan', 'help to take care of his plantation', '4');

--
-- Triggers `supplyagrimaterial`
--
DELIMITER $$
CREATE TRIGGER `Agri Distribute` BEFORE INSERT ON `supplyagrimaterial` FOR EACH ROW UPDATE newagrimaterial SET quantity = quantity-NEW.quantity WHERE materialid = NEW.materialid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `supplyconstmaterial`
--

CREATE TABLE `supplyconstmaterial` (
  `supplieddate` date NOT NULL,
  `materialid` int(12) NOT NULL,
  `name` varchar(110) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `supplyconstmaterial`
--

INSERT INTO `supplyconstmaterial` (`supplieddate`, `materialid`, `name`, `description`, `quantity`) VALUES
('2021-09-20', 26, 'Laila', 'To Renovate Laila\'s Cottage', '5'),
('2021-09-20', 27, 'Laila', 'To Renovate Laila\'s Cottage', '12'),
('2021-09-21', 27, 'Laila', 'To Renovate Laila\'s Cottage', '10'),
('2021-09-21', 28, 'Lake Renovation', 'Lake Renovation ', '100'),
('2021-09-21', 29, 'Laila', 'Home Reconstruction', '20');

--
-- Triggers `supplyconstmaterial`
--
DELIMITER $$
CREATE TRIGGER `Const Distribute` BEFORE INSERT ON `supplyconstmaterial` FOR EACH ROW UPDATE newconstmaterial SET quantity = quantity-NEW.quantity WHERE materialid = NEW.materialid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `supplyothermaterial`
--

CREATE TABLE `supplyothermaterial` (
  `supplieddate` date NOT NULL,
  `materialid` int(12) NOT NULL,
  `name` varchar(110) NOT NULL,
  `description` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `supplyothermaterial`
--

INSERT INTO `supplyothermaterial` (`supplieddate`, `materialid`, `name`, `description`, `quantity`) VALUES
('2021-09-20', 6, '', 'COVID 19 Relief Packages', '4'),
('2021-09-20', 6, 'Laila', 'COVID 19 Relief Package', '5');

--
-- Triggers `supplyothermaterial`
--
DELIMITER $$
CREATE TRIGGER `Other Distribute` BEFORE INSERT ON `supplyothermaterial` FOR EACH ROW UPDATE newothermaterial SET quantity = quantity-NEW.quantity WHERE materialid = NEW.materialid
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `type1`
--

CREATE TABLE `type1` (
  `ID` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `type1`
--

INSERT INTO `type1` (`ID`, `type`, `description`) VALUES
(1, 'All Voters', ''),
(2, 'All Tenants', ''),
(3, 'Pensioners', ''),
(4, 'Low Income Villagers', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(100) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` int(10) NOT NULL,
  `userType` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(300) NOT NULL,
  `status` int(2) NOT NULL,
  `userImage` varchar(9999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `fname`, `lname`, `address`, `phone`, `userType`, `email`, `password`, `status`, `userImage`) VALUES
(3, 'Mohamed', 'Salman', 'Central province, Nuwara-Eliya District', 768683353, 'client', 'salman@gmail.com', '$2b$10$mVGs965mnwLS.AndwA/LaOV.rUeqsIAjXWz5i8.kkIm6DkQhl1aKm', 1, 'iVBORw0KGgoAAAANSUhEUgAABgYAAAVwCAYAAACHOuRwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUACLcESURBVHgB7P0Hl2zXeaYJ7nDpM6+FubgACJIAyKJUKpnSaKZqJFWXalXNr5zVZmatXl1rumemp6a71eUor5IoOtgL4Hp/03sTEaf3u8/5Tnyx80RmgiRAAPE8YDAijtlnHxO5gPf9TKuIBAAAAAAAAAAAAAAAmAraAQAAAAAAAAAAAAAApgaMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIwBgAAAAAAAAAAAAAApgiMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIwBgAAAAAAAAAAAAAApgiMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIwBgAAAAAAAAAAAAAApgiMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIwBgAAAAAAAAAAAAAApgiMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIwBgAAAAAAAAAAAAAApgiMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIwBgAAAAAAAAAAAAAApgiMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIwBgAAAAAAAAAAAAAApgiMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIwBgAAAAAAAAAAAAAApgiMAQAAAAAAAAAAAACAKQJjAAAAAAAAAAAAAABgisAYAAAAAAAAAAAAAACYIjAGAAAAAAAAAAAAAACmCIwBAAAAAAAAAAAAAIApAmMAAAAAAAAAAAAAAGCKwBgAAAAAAAAAAAAAAJgiMAYAAAAAAAAAAAAAAKYIjAEAAAAAAAAAAAAAgCkCYwAAAAAAAAAAAAAAYIrAGAAAAAAAAAAAAAAAmCIw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'),
(4, 'Maheshi', 'Yatipansalawa', 'Nuwara-Eliya Road , Gampola', 712345682, 'client', 'maheshi@gmail.com', '$2b$10$a7OFhC61SWfPkzIq7H59juBdlEsZueoHHuFCRjfpwlkA6OKpwJsi6', 1, ''),
(5, 'Lishani', 'Sooriyampola', 'Katugastota Road, Kandy', 712356478, 'guest', 'lishani@gmail.com', '$2b$10$iwUZJ7uC6/uycaAZgObeRu8sL/RXhmiqXff7Mk7.ht4ipGktJiyzi', 1, ''),
(6, 'Hirusha', 'Chamod', 'Colombo 06', 753256842, 'guest', 'hirusha@gmail.com', '$2b$10$MAsvbV4PovTv/UJsRY.Mm.7/8PHGIhQW29ulkdGUg.7GHp.TgNt8K', 1, ''),
(7, 'Madona', 'Dineshiya', 'NO 74, Gampola Road, Kandy', 711655166, 'admin', 'admin@gmail.com', '$2b$10$I5oMBtZlyVLzEGwwV9.1luwVEDAEmfvNxFKLVHbaeprLFFQR4HEpC', 1, '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');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `availability`
--
ALTER TABLE `availability`
  ADD PRIMARY KEY (`availID`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`bookID`);

--
-- Indexes for table `book_topics`
--
ALTER TABLE `book_topics`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD PRIMARY KEY (`complaintID`);

--
-- Indexes for table `constsmaterial`
--
ALTER TABLE `constsmaterial`
  ADD KEY `matid` (`materialid`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`donation_id`);

--
-- Indexes for table `finance`
--
ALTER TABLE `finance`
  ADD PRIMARY KEY (`transectionID`);

--
-- Indexes for table `formtemplate`
--
ALTER TABLE `formtemplate`
  ADD PRIMARY KEY (`formID`);

--
-- Indexes for table `forumpost`
--
ALTER TABLE `forumpost`
  ADD PRIMARY KEY (`postID`);

--
-- Indexes for table `fund`
--
ALTER TABLE `fund`
  ADD PRIMARY KEY (`transectionID`);

--
-- Indexes for table `newagrimaterial`
--
ALTER TABLE `newagrimaterial`
  ADD PRIMARY KEY (`materialid`);

--
-- Indexes for table `newconstmaterial`
--
ALTER TABLE `newconstmaterial`
  ADD PRIMARY KEY (`materialid`);

--
-- Indexes for table `newothermaterial`
--
ALTER TABLE `newothermaterial`
  ADD PRIMARY KEY (`materialid`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`noticeID`);

--
-- Indexes for table `othermaterial`
--
ALTER TABLE `othermaterial`
  ADD KEY `othermaterial` (`materialid`);

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`RegID`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `query`
--
ALTER TABLE `query`
  ADD PRIMARY KEY (`queryID`);

--
-- Indexes for table `sms`
--
ALTER TABLE `sms`
  ADD PRIMARY KEY (`smsID`);

--
-- Indexes for table `supplyagrimaterial`
--
ALTER TABLE `supplyagrimaterial`
  ADD KEY `supplyagri` (`materialid`);

--
-- Indexes for table `supplyconstmaterial`
--
ALTER TABLE `supplyconstmaterial`
  ADD KEY `supplyconst` (`materialid`);

--
-- Indexes for table `supplyothermaterial`
--
ALTER TABLE `supplyothermaterial`
  ADD KEY `supplyother` (`materialid`);

--
-- Indexes for table `type1`
--
ALTER TABLE `type1`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `availability`
--
ALTER TABLE `availability`
  MODIFY `availID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `bookID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `book_topics`
--
ALTER TABLE `book_topics`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `complaint`
--
ALTER TABLE `complaint`
  MODIFY `complaintID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1006;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `donation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `finance`
--
ALTER TABLE `finance`
  MODIFY `transectionID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `formtemplate`
--
ALTER TABLE `formtemplate`
  MODIFY `formID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `forumpost`
--
ALTER TABLE `forumpost`
  MODIFY `postID` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fund`
--
ALTER TABLE `fund`
  MODIFY `transectionID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `newagrimaterial`
--
ALTER TABLE `newagrimaterial`
  MODIFY `materialid` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `newconstmaterial`
--
ALTER TABLE `newconstmaterial`
  MODIFY `materialid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `newothermaterial`
--
ALTER TABLE `newothermaterial`
  MODIFY `materialid` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `noticeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `query`
--
ALTER TABLE `query`
  MODIFY `queryID` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sms`
--
ALTER TABLE `sms`
  MODIFY `smsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `constsmaterial`
--
ALTER TABLE `constsmaterial`
  ADD CONSTRAINT `matid` FOREIGN KEY (`materialid`) REFERENCES `newconstmaterial` (`materialid`);

--
-- Constraints for table `othermaterial`
--
ALTER TABLE `othermaterial`
  ADD CONSTRAINT `othermaterial` FOREIGN KEY (`materialid`) REFERENCES `newothermaterial` (`materialid`);

--
-- Constraints for table `supplyagrimaterial`
--
ALTER TABLE `supplyagrimaterial`
  ADD CONSTRAINT `supplyagri` FOREIGN KEY (`materialid`) REFERENCES `newagrimaterial` (`materialid`);

--
-- Constraints for table `supplyconstmaterial`
--
ALTER TABLE `supplyconstmaterial`
  ADD CONSTRAINT `supplyconst` FOREIGN KEY (`materialid`) REFERENCES `newconstmaterial` (`materialid`);

--
-- Constraints for table `supplyothermaterial`
--
ALTER TABLE `supplyothermaterial`
  ADD CONSTRAINT `supplyother` FOREIGN KEY (`materialid`) REFERENCES `newothermaterial` (`materialid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
