CREATE TABLE `app_historial_mascota` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `app_mascota_id` int(11) NOT NULL,
  `app_servicio_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
