-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2021 at 04:06 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(10) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_pass` varchar(255) NOT NULL,
  `admin_image` text NOT NULL,
  `admin_contact` varchar(255) NOT NULL,
  `admin_country` text NOT NULL,
  `admin_job` varchar(255) NOT NULL,
  `admin_about` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `admin_name`, `admin_email`, `admin_pass`, `admin_image`, `admin_contact`, `admin_country`, `admin_job`, `admin_about`) VALUES
(2, 'Administrator', 'admin@mail.com', '123456', 'user.jpg', '012345678', 'Viet Nam', 'System Management', '  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical  '),
(5, 'admin2', 'admin2@gmail.com', '123456', 'sample_image.jpg', '1234567890', 'Vi?t Nam', 'Manger', ' manager');

-- --------------------------------------------------------

--
-- Table structure for table `auth_tokens`
--

CREATE TABLE `auth_tokens` (
  `token` varchar(256) NOT NULL,
  `account_id` int(11) NOT NULL,
  `expire_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_tokens`
--

INSERT INTO `auth_tokens` (`token`, `account_id`, `expire_at`) VALUES
('11270426ada040e8a714289c13001b05071af9e5f633f27d70e074792392c4b7', 8, 1638318289),
('1d3aa56690612921675f9f98999c0086eedd4d02a092a27af630467541198ce5', 8, 1638899523),
('4b42a3e8ff5f168d2c193cf7c9fac7624c1d640722c379328fd313ab95d5c260', 8, 1638318432),
('528a8fa0a744562c0d6106d5ace5baa724d7b0a90a03a1f82f0640ddf4f12d32', 8, 1638291123),
('66a0be48a8fbfa1e094907cf4baf57df4db87d5b617b6f2deb6df11f8ab8bec2', 8, 1638319230),
('6de02d7ffa3d81bd155175dd91e6a2de9888706c13be6f36cae4c405b5fc8683', 8, 1638901576),
('7a510cd9c96133809b78f3b56a4cad9c2e13b26d24677e4464be06db1db6c257', 8, 1638291123),
('871d94c9f1c2e83a2afd7e58de342f4c6199405eb3151b99fd21ecee92c8b8d4', 8, 1638971294),
('a3dce788cbe2613e975f9eec8c37edfd09c28c92ab828071c28373479e74137d', 8, 1638362888),
('e8a2a9574c5a26fb45b9aa98ccfdcdf827e56334662bde1017b9c5a1da413e61', 8, 1638322845);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(10) NOT NULL,
  `cat_title` text NOT NULL,
  `cat_top` text NOT NULL,
  `cat_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat_title`, `cat_top`, `cat_image`) VALUES
(2, 'Feminine', 'no', 'feminelg.png'),
(3, 'Kids', 'no', 'kidslg.jpg'),
(4, 'Others', 'yes', 'othericon.png'),
(5, 'Men', 'yes', 'malelg.png'),
(6, 'Student', 'yes', 'sample_image.jpg'),
(9, 'Teacher', 'no', 'sample_image.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(10) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_pass` varchar(255) NOT NULL,
  `customer_country` text NOT NULL,
  `customer_city` text NOT NULL,
  `customer_contact` varchar(255) NOT NULL,
  `customer_address` text NOT NULL,
  `customer_image` text NOT NULL,
  `customer_ip` varchar(255) NOT NULL,
  `customer_confirm_code` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_email`, `customer_pass`, `customer_country`, `customer_city`, `customer_contact`, `customer_address`, `customer_image`, `customer_ip`, `customer_confirm_code`) VALUES
(2, 'user', 'user@ave.com', '123', 'United State', 'New York', '0092334566931', 'new york', 'user-icn-min.png', '::1', ''),
(3, 'Demo Customer', 'demo@customer.com', 'Password123', 'DemoCountry', 'DemoCity', '700000000', 'DemoAddress', 'user-icn-min.png', '::1', ''),
(4, 'Thomas', 'thomas@demo.com', 'Password123', 'One Country', 'One City', '777777777', '111 Address', 'user-icn-min.png', '::1', '1427053935'),
(5, 'Fracis', 'test@customer.com', 'Password123', 'US', 'Demo City', '780000000', '112 Bleck Street', 'user-icn-min.png', '::1', '1634138674'),
(6, 'Sample Customer', 'customer@mail.com', 'Password123', 'Sample Country', 'Sample City', '7800000000', 'Sample Address', 'user-icn-min.png', '::1', '174829126'),
(8, 'kim', 'kimnguyen@gmail.com', '$2y$10$5ebS4yZTNWy2Ap9PEVYvXeF1qSVPnJuN42Za9s/D.DJSepLSuUWsq', 'VN', 'HCM', '0123456789', 'LTK, Q10', 'user-icn-min.png', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `customer_orders`
--

CREATE TABLE `customer_orders` (
  `order_id` int(10) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `due_amount` int(100) NOT NULL,
  `invoice_no` int(100) NOT NULL,
  `qty` int(10) NOT NULL,
  `size` text NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `order_status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_orders`
--

INSERT INTO `customer_orders` (`order_id`, `customer_id`, `due_amount`, `invoice_no`, `qty`, `size`, `order_date`, `order_status`) VALUES
(17, 2, 100, 1715523401, 2, 'Large', '2021-12-01 13:08:39', 'shipping'),
(23, 3, 20, 1762810884, 1, 'Medium', '2021-12-01 13:47:21', 'Complete'),
(25, 4, 90, 2008540778, 1, 'Medium', '2021-09-14 16:43:15', 'pending'),
(27, 5, 120, 2138906686, 1, 'Small', '2021-09-15 03:18:41', 'Complete'),
(28, 5, 180, 361540113, 2, 'Medium', '2021-09-15 03:25:42', 'Complete'),
(42, 8, 425, 0, 1, '', '2021-12-01 13:48:34', 'shipping'),
(43, 8, 425, 0, 2, '', '2021-12-01 13:48:37', 'shipping');

-- --------------------------------------------------------

--
-- Table structure for table `pending_orders`
--

CREATE TABLE `pending_orders` (
  `order_id` int(10) NOT NULL,
  `customer_id` int(10) NOT NULL,
  `invoice_no` int(10) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(10) NOT NULL,
  `size` text NOT NULL,
  `order_status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pending_orders`
--

INSERT INTO `pending_orders` (`order_id`, `customer_id`, `invoice_no`, `product_id`, `qty`, `size`, `order_status`) VALUES
(17, 2, 1715523401, 9, 2, 'Large', 'shipping'),
(23, 3, 1762810884, 12, 1, 'Medium', 'Complete'),
(25, 4, 2008540778, 13, 1, 'Medium', 'pending'),
(27, 5, 2138906686, 14, 1, 'Small', 'Complete'),
(28, 5, 361540113, 13, 2, 'Medium', 'Complete'),
(42, 8, 0, 8, 1, '', 'shipping'),
(43, 8, 0, 13, 2, '', 'shipping');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(10) NOT NULL,
  `p_cat_id` int(10) NOT NULL,
  `cat_id` int(10) NOT NULL,
  `manufacturer_id` int(10) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `product_title` text NOT NULL,
  `product_url` text NOT NULL,
  `product_img1` text NOT NULL,
  `product_img2` text NOT NULL,
  `product_img3` text NOT NULL,
  `product_price` int(10) NOT NULL,
  `product_psp_price` int(100) NOT NULL,
  `product_desc` text NOT NULL,
  `product_features` text NOT NULL,
  `product_video` text NOT NULL,
  `product_keywords` text NOT NULL,
  `product_label` text NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `p_cat_id`, `cat_id`, `manufacturer_id`, `date`, `product_title`, `product_url`, `product_img1`, `product_img2`, `product_img3`, `product_price`, `product_psp_price`, `product_desc`, `product_features`, `product_video`, `product_keywords`, `product_label`, `status`) VALUES
(8, 4, 2, 4, '2021-12-01 13:09:43', 'Sleeveless Flaux Fur Hybrid Coatsssssss', 'product-url-8', 'Fm2a.jpg', 'Black Blouse Versace Coat2.jpg', 'Black Blouse Versace Coat3.jpg', 245, 100, '\r\n\r\n\r\n\r\n\r\n<p>This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description.</p>\r\n\r\n\r\n\r\n\r\n', '\r\n\r\n\r\n\r\n\r\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\r\n\r\n\r\n\r\n\r\n', '\r\n\r\n\r\n\r\n\r\n<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/qRswlmADRa8\" frameborder=\"0\" allowfullscreen></iframe>\r\n\r\n\r\n\r\n\r\n', 'Coats', 'New', 'product'),
(9, 5, 4, 7, '2021-09-14 17:06:30', 'Long Sleeves Polo Shirt for Men', 'product-url-9', 'product-1.jpg', 'product-2.jpg', 'product-3.jpg', 50, 35, '\r\n\r\n\r\n\r\n<p>This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description. This is a sample product description.</p>\r\n\r\n\r\n\r\n', '\r\n\r\n\r\n\r\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\r\n\r\n\r\n\r\n', '\r\n\r\n\r\n\r\n<iframe width=\"854\" height=\"480\" src=\"https://www.youtube.com/embed/qRswlmADRa8\" frameborder=\"0\" allowfullscreen></iframe>\r\n\r\n\r\n\r\n', 'T-Shirt', 'Sale', 'product'),
(12, 8, 5, 2, '2021-05-25 09:15:09', 'Ultraboost 21 PrimeBlue Shoes', 'ultraboost-21-adidas', 'Ultraboost_21.jpg', 'Ultraboost_21_2.jpg', 'Ultraboost_21_3.jpg', 150, 180, '\r\n\r\nThis product is made with Primeblue, a high-performance recycled material made in part with Parley Ocean Plastic. 50% of the upper is textile, 92% of the textile is Primeblue yarn. No virgin polyester.', '\r\n\r\nComfortable and responsive, Ultraboost became our first shoe to be as popular in streetwear style as it is in performance running.', '\r\nhttps://assets.adidas.com/videos/q_auto,f_auto,g_auto/599fff35a3cf432aa9bbac7c0091316f_d98c/Ultraboost_21_Primeblue_Shoes_Blue_FX7729_video.mp4\r\n', 'sneakers adidas ultraboost shoes', 'New', 'product'),
(13, 9, 2, 3, '2021-09-14 16:26:51', 'Nike Sportswear Essential Collection', 'nike-sportswear-essen-col', 'nike-s.jpg', 'nike-s2.jpg', 'nike-s02.jpg', 90, 85, '\r\n\r\nThis is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text. This is a sample text.\r\n\r\n\r\n\r\n', '\r\n\r\n\r\nThis is a sample text. This is a sample text. This is a sample text.This is a sample text. This is a sample text. This is a sample text.This is a sample text. This is a sample text. This is a sample text.This is a sample text. This is a sample text. This is a sample text.\r\n\r\n', '\r\n\r\n\r\nThis is a sample text. This is a sample text. This is a sample text.\r\n\r\n\r\n', 'nike sportswear', 'Featured', 'product'),
(14, 5, 5, 7, '2021-09-14 17:03:38', 'Demo Product Title Name - Test', 'demo-product-showcase', 'Prod-placeholder.jpg', 'Prod-placeholder.jpg', 'Prod-placeholder.jpg', 120, 111, '\r\nThis is a demo. This is a demo. This is a demo. This is a demo.\r\n\r\n\r\n', '\r\n\r\n\r\nThis is a demo.\r\n', '\r\n\r\n\r\nThis is a demo.\r\n', 'demo test product', 'Test', 'product'),
(15, 5, 5, 8, '2021-09-15 03:46:42', 'Gildan 1800 Ultra Cotton Polo Shirt', 'cotton-polo-shirt', 'g18bulk.jpg', 'g18bulk2.jpg', 'g18bulk3.jpg', 88, 75, '\r\nTHIS IS A DEMO DESCRIPTION\r\n', '\r\n\r\nDEMO FEATURES\r\n\r\n', '\r\n\r\n\r\n\r\n', 'polo shirt', 'Sale', 'bundle'),
(16, 5, 3, 0, '2021-12-01 01:12:00', 'product abc', 'abc', 'kid2c.jpg', 'kid2c.jpg', 'kid2a.jpg', 100, 101, '\r\nkid description\r\n', '\r\n\r\n', '\r\n\r\n', 'kid ', 'product', 'product'),
(17, 5, 5, 0, '2021-12-01 01:16:28', 'men 1', 'men 1', 'm2a.jpg', 'm2a.jpg', 'm2b.jpg', 100, 101, 'desc men', '\r\n\r\n', '\r\n\r\n', 'men', 'product', 'product'),
(18, 5, 5, 0, '2021-12-01 01:16:46', 'men 2', 'men 2', 'm2a.jpg', 'm2a.jpg', 'm2b.jpg', 100, 101, 'desc men2', '\r\n\r\n', '\r\n\r\n', 'men2', 'product', 'product'),
(19, 5, 5, 0, '2021-12-01 01:17:05', 'men 3', 'men 3', 'm2a.jpg', 'm2a.jpg', 'm2b.jpg', 100, 101, 'desc men3', '\r\n\r\n', '\r\n\r\n', 'men3', 'product', 'product'),
(20, 5, 5, 0, '2021-12-01 01:17:20', 'men 4', 'men 4', 'm2a.jpg', 'm2a.jpg', 'm2b.jpg', 100, 101, 'desc men4', '\r\n\r\n', '\r\n\r\n', 'men4', 'product', 'product'),
(21, 5, 5, 0, '2021-12-01 01:17:33', 'men 5', 'men 5', 'm2a.jpg', 'm2a.jpg', 'm2b.jpg', 100, 101, 'desc men5', '\r\n\r\n', '\r\n\r\n', 'men5', 'product', 'product'),
(22, 5, 5, 0, '2021-12-01 01:17:59', 'men 6', 'men 6', 'm2a.jpg', 'm2a.jpg', 'm2b.jpg', 100, 101, 'desc men6', '\r\n\r\n', '\r\n\r\n', 'men6', 'product', 'product'),
(23, 5, 6, 0, '2021-12-01 02:52:50', 'product abcd', 'abcd', 'g18bulk.jpg', 'kid1b.jpg', 'kid3a.jpg', 200, 201, '\r\nádasdasdasdad\r\n', '\r\n\r\n', '\r\n\r\n', 'kid ', 'product', 'product');

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `p_cat_id` int(10) NOT NULL,
  `p_cat_title` text NOT NULL,
  `p_cat_top` text NOT NULL,
  `p_cat_image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`p_cat_id`, `p_cat_title`, `p_cat_top`, `p_cat_image`) VALUES
(4, 'Coats', 'no', 'coaticn.png'),
(5, 'T-Shirts', 'no', 'tshirticn.png'),
(6, 'Sweater', 'no', 'sweatericn.png'),
(7, 'jackets', 'yes', 'jacketicn.png'),
(8, 'Sneakers', 'yes', 'sneakericn.png'),
(9, 'Trousers', 'no', 'trousericn.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `auth_tokens`
--
ALTER TABLE `auth_tokens`
  ADD PRIMARY KEY (`token`,`account_id`),
  ADD KEY `account_id` (`account_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customer_orders`
--
ALTER TABLE `customer_orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `pending_orders`
--
ALTER TABLE `pending_orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `cat_id` (`cat_id`),
  ADD KEY `p_cat_id` (`p_cat_id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`p_cat_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `customer_orders`
--
ALTER TABLE `customer_orders`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `pending_orders`
--
ALTER TABLE `pending_orders`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `p_cat_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_tokens`
--
ALTER TABLE `auth_tokens`
  ADD CONSTRAINT `auth_tokens_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `customers` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customer_orders`
--
ALTER TABLE `customer_orders`
  ADD CONSTRAINT `customer_orders_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `pending_orders` (`order_id`),
  ADD CONSTRAINT `customer_orders_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Constraints for table `pending_orders`
--
ALTER TABLE `pending_orders`
  ADD CONSTRAINT `pending_orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `pending_orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`p_cat_id`) REFERENCES `product_categories` (`p_cat_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
