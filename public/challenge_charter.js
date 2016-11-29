$(function () {
    var parsed_data = {522: [{'cumul_kwh': 0.00695792, 'kWh': 0.00695792, 'time_stamp': '2016-03-25 09:00:00-07:00', 'power': 6.95792, 'device_id': 522}, {'cumul_kwh': 0.0337532, 'kWh': 0.02679528, 'time_stamp': '2016-03-25 10:00:00-07:00', 'power': 26.795279999999998, 'device_id': 522}, {'cumul_kwh': 0.06163830000000001, 'kWh': 0.0278851, 'time_stamp': '2016-03-25 11:00:00-07:00', 'power': 27.8851, 'device_id': 522}, {'cumul_kwh': 0.09077185, 'kWh': 0.02913355, 'time_stamp': '2016-03-25 12:00:00-07:00', 'power': 29.13355, 'device_id': 522}, {'cumul_kwh': 0.13539875, 'kWh': 0.0446269, 'time_stamp': '2016-03-25 13:00:00-07:00', 'power': 44.6269, 'device_id': 522}, {'cumul_kwh': 0.18273601, 'kWh': 0.04733726, 'time_stamp': '2016-03-25 14:00:00-07:00', 'power': 47.33726, 'device_id': 522}, {'cumul_kwh': 0.22571758, 'kWh': 0.04298157, 'time_stamp': '2016-03-25 15:00:00-07:00', 'power': 42.98157, 'device_id': 522}, {'cumul_kwh': 0.25412377, 'kWh': 0.02840619, 'time_stamp': '2016-03-25 16:00:00-07:00', 'power': 28.406190000000002, 'device_id': 522}, {'cumul_kwh': 0.28385129, 'kWh': 0.02972752, 'time_stamp': '2016-03-25 17:00:00-07:00', 'power': 29.727520000000002, 'device_id': 522}, {'cumul_kwh': 0.31162278, 'kWh': 0.02777149, 'time_stamp': '2016-03-25 18:00:00-07:00', 'power': 27.771490000000004, 'device_id': 522}, {'cumul_kwh': 0.33895899, 'kWh': 0.02733621, 'time_stamp': '2016-03-25 19:00:00-07:00', 'power': 27.336209999999998, 'device_id': 522}, {'cumul_kwh': 0.36857009, 'kWh': 0.029611099999999998, 'time_stamp': '2016-03-25 20:00:00-07:00', 'power': 29.6111, 'device_id': 522}, {'cumul_kwh': 0.39848713, 'kWh': 0.02991704, 'time_stamp': '2016-03-25 21:00:00-07:00', 'power': 29.917040000000004, 'device_id': 522}, {'cumul_kwh': 0.43753361, 'kWh': 0.03904648, 'time_stamp': '2016-03-25 22:00:00-07:00', 'power': 39.046479999999995, 'device_id': 522}, {'cumul_kwh': 0.46468718, 'kWh': 0.02715357, 'time_stamp': '2016-03-25 23:00:00-07:00', 'power': 27.153570000000002, 'device_id': 522}, {'cumul_kwh': 0.49152401, 'kWh': 0.02683683, 'time_stamp': '2016-03-26 00:00:00-07:00', 'power': 26.83683, 'device_id': 522}, {'cumul_kwh': 0.51844504, 'kWh': 0.02692103, 'time_stamp': '2016-03-26 01:00:00-07:00', 'power': 26.92103, 'device_id': 522}, {'cumul_kwh': 0.54537346, 'kWh': 0.02692842, 'time_stamp': '2016-03-26 02:00:00-07:00', 'power': 26.928420000000003, 'device_id': 522}, {'cumul_kwh': 0.57220318, 'kWh': 0.02682972, 'time_stamp': '2016-03-26 03:00:00-07:00', 'power': 26.829720000000002, 'device_id': 522}, {'cumul_kwh': 0.59906513, 'kWh': 0.02686195, 'time_stamp': '2016-03-26 04:00:00-07:00', 'power': 26.86195, 'device_id': 522}, {'cumul_kwh': 0.63147734, 'kWh': 0.03241221, 'time_stamp': '2016-03-26 05:00:00-07:00', 'power': 32.412209999999995, 'device_id': 522}, {'cumul_kwh': 0.65983791, 'kWh': 0.02836057, 'time_stamp': '2016-03-26 06:00:00-07:00', 'power': 28.360570000000003, 'device_id': 522}, {'cumul_kwh': 0.68771718, 'kWh': 0.02787927, 'time_stamp': '2016-03-26 07:00:00-07:00', 'power': 27.87927, 'device_id': 522}, {'cumul_kwh': 0.71475572, 'kWh': 0.02703854, 'time_stamp': '2016-03-26 08:00:00-07:00', 'power': 27.03854, 'device_id': 522}, {'cumul_kwh': 0.74173896, 'kWh': 0.02698324, 'time_stamp': '2016-03-26 09:00:00-07:00', 'power': 26.983240000000002, 'device_id': 522}, {'cumul_kwh': 0.77036228, 'kWh': 0.02862332, 'time_stamp': '2016-03-26 10:00:00-07:00', 'power': 28.62332, 'device_id': 522}, {'cumul_kwh': 0.7979108, 'kWh': 0.02754852, 'time_stamp': '2016-03-26 11:00:00-07:00', 'power': 27.54852, 'device_id': 522}, {'cumul_kwh': 0.82607758, 'kWh': 0.02816678, 'time_stamp': '2016-03-26 12:00:00-07:00', 'power': 28.16678, 'device_id': 522}, {'cumul_kwh': 0.85365622, 'kWh': 0.02757864, 'time_stamp': '2016-03-26 13:00:00-07:00', 'power': 27.578640000000004, 'device_id': 522}, {'cumul_kwh': 0.88347158, 'kWh': 0.02981536, 'time_stamp': '2016-03-26 14:00:00-07:00', 'power': 29.81536, 'device_id': 522}, {'cumul_kwh': 0.91073331, 'kWh': 0.02726173, 'time_stamp': '2016-03-26 15:00:00-07:00', 'power': 27.26173, 'device_id': 522}, {'cumul_kwh': 0.93799536, 'kWh': 0.02726205, 'time_stamp': '2016-03-26 16:00:00-07:00', 'power': 27.26205, 'device_id': 522}, {'cumul_kwh': 0.96501112, 'kWh': 0.02701576, 'time_stamp': '2016-03-26 17:00:00-07:00', 'power': 27.015759999999997, 'device_id': 522}, {'cumul_kwh': 0.98020821, 'kWh': 0.01519709, 'time_stamp': '2016-03-26 18:00:00-07:00', 'power': 15.19709, 'device_id': 522}, {'cumul_kwh': 1.01025663, 'kWh': 0.03004842, 'time_stamp': '2016-03-26 19:00:00-07:00', 'power': 30.04842, 'device_id': 522}, {'cumul_kwh': 1.0373511, 'kWh': 0.02709447, 'time_stamp': '2016-03-26 20:00:00-07:00', 'power': 27.09447, 'device_id': 522}, {'cumul_kwh': 1.0644101000000001, 'kWh': 0.027058999999999996, 'time_stamp': '2016-03-26 21:00:00-07:00', 'power': 27.059, 'device_id': 522}, {'cumul_kwh': 1.09143327, 'kWh': 0.02702317, 'time_stamp': '2016-03-26 22:00:00-07:00', 'power': 27.02317, 'device_id': 522}, {'cumul_kwh': 1.11853479, 'kWh': 0.02710152, 'time_stamp': '2016-03-26 23:00:00-07:00', 'power': 27.10152, 'device_id': 522}, {'cumul_kwh': 1.14532279, 'kWh': 0.026788, 'time_stamp': '2016-03-27 00:00:00-07:00', 'power': 26.788, 'device_id': 522}, {'cumul_kwh': 1.17231476, 'kWh': 0.02699197, 'time_stamp': '2016-03-27 01:00:00-07:00', 'power': 26.991970000000002, 'device_id': 522}, {'cumul_kwh': 1.19916181, 'kWh': 0.02684705, 'time_stamp': '2016-03-27 02:00:00-07:00', 'power': 26.84705, 'device_id': 522}, {'cumul_kwh': 1.22593842, 'kWh': 0.02677661, 'time_stamp': '2016-03-27 03:00:00-07:00', 'power': 26.776609999999998, 'device_id': 522}, {'cumul_kwh': 1.25272122, 'kWh': 0.0267828, 'time_stamp': '2016-03-27 04:00:00-07:00', 'power': 26.7828, 'device_id': 522}, {'cumul_kwh': 1.28229909, 'kWh': 0.02957787, 'time_stamp': '2016-03-27 05:00:00-07:00', 'power': 29.57787, 'device_id': 522}, {'cumul_kwh': 1.310181, 'kWh': 0.02788191, 'time_stamp': '2016-03-27 06:00:00-07:00', 'power': 27.881909999999998, 'device_id': 522}, {'cumul_kwh': 1.33727075, 'kWh': 0.02708975, 'time_stamp': '2016-03-27 07:00:00-07:00', 'power': 27.08975, 'device_id': 522}, {'cumul_kwh': 1.36391424, 'kWh': 0.02664349, 'time_stamp': '2016-03-27 08:00:00-07:00', 'power': 26.643490000000003, 'device_id': 522}, {'cumul_kwh': 1.39075956, 'kWh': 0.02684532, 'time_stamp': '2016-03-27 09:00:00-07:00', 'power': 26.84532, 'device_id': 522}, {'cumul_kwh': 1.42789715, 'kWh': 0.03713759, 'time_stamp': '2016-03-27 10:00:00-07:00', 'power': 37.13759, 'device_id': 522}, {'cumul_kwh': 1.48159283, 'kWh': 0.05369568, 'time_stamp': '2016-03-27 11:00:00-07:00', 'power': 53.69568, 'device_id': 522}, {'cumul_kwh': 1.55143666, 'kWh': 0.06984383, 'time_stamp': '2016-03-27 12:00:00-07:00', 'power': 69.84383000000001, 'device_id': 522}, {'cumul_kwh': 1.59880206, 'kWh': 0.0473654, 'time_stamp': '2016-03-27 13:00:00-07:00', 'power': 47.3654, 'device_id': 522}, {'cumul_kwh': 1.64140843, 'kWh': 0.04260637, 'time_stamp': '2016-03-27 14:00:00-07:00', 'power': 42.60637, 'device_id': 522}, {'cumul_kwh': 1.66825636, 'kWh': 0.02684793, 'time_stamp': '2016-03-27 15:00:00-07:00', 'power': 26.847929999999998, 'device_id': 522}, {'cumul_kwh': 1.69532994, 'kWh': 0.02707358, 'time_stamp': '2016-03-27 16:00:00-07:00', 'power': 27.07358, 'device_id': 522}, {'cumul_kwh': 1.72227481, 'kWh': 0.02694487, 'time_stamp': '2016-03-27 17:00:00-07:00', 'power': 26.94487, 'device_id': 522}, {'cumul_kwh': 1.74923707, 'kWh': 0.02696226, 'time_stamp': '2016-03-27 18:00:00-07:00', 'power': 26.962259999999997, 'device_id': 522}, {'cumul_kwh': 1.77649301, 'kWh': 0.02725594, 'time_stamp': '2016-03-27 19:00:00-07:00', 'power': 27.255940000000002, 'device_id': 522}, {'cumul_kwh': 1.80348582, 'kWh': 0.02699281, 'time_stamp': '2016-03-27 20:00:00-07:00', 'power': 26.99281, 'device_id': 522}, {'cumul_kwh': 1.83116226, 'kWh': 0.02767644, 'time_stamp': '2016-03-27 21:00:00-07:00', 'power': 27.676440000000003, 'device_id': 522}, {'cumul_kwh': 1.83116226, 'kWh': 0.0, 'time_stamp': '2016-03-27 22:00:00-07:00', 'power': 0.0, 'device_id': 522}, {'cumul_kwh': 1.83116226, 'kWh': 0.0, 'time_stamp': '2016-03-27 23:00:00-07:00', 'power': 0.0, 'device_id': 522}, {'cumul_kwh': 1.83952427, 'kWh': 0.00836201, 'time_stamp': '2016-03-28 00:00:00-07:00', 'power': 8.36201, 'device_id': 522}, {'cumul_kwh': 1.86689568, 'kWh': 0.02737141, 'time_stamp': '2016-03-28 01:00:00-07:00', 'power': 27.371409999999997, 'device_id': 522}, {'cumul_kwh': 1.89457091, 'kWh': 0.02767523, 'time_stamp': '2016-03-28 02:00:00-07:00', 'power': 27.67523, 'device_id': 522}, {'cumul_kwh': 1.92201351, 'kWh': 0.027442599999999998, 'time_stamp': '2016-03-28 03:00:00-07:00', 'power': 27.4426, 'device_id': 522}, {'cumul_kwh': 1.95240881, 'kWh': 0.030395299999999997, 'time_stamp': '2016-03-28 04:00:00-07:00', 'power': 30.3953, 'device_id': 522}, {'cumul_kwh': 1.97981156, 'kWh': 0.02740275, 'time_stamp': '2016-03-28 05:00:00-07:00', 'power': 27.40275, 'device_id': 522}, {'cumul_kwh': 2.00980896, 'kWh': 0.0299974, 'time_stamp': '2016-03-28 06:00:00-07:00', 'power': 29.9974, 'device_id': 522}, {'cumul_kwh': 2.03714853, 'kWh': 0.02733957, 'time_stamp': '2016-03-28 07:00:00-07:00', 'power': 27.339570000000002, 'device_id': 522}, {'cumul_kwh': 2.0644096999999997, 'kWh': 0.02726117, 'time_stamp': '2016-03-28 08:00:00-07:00', 'power': 27.26117, 'device_id': 522}, {'cumul_kwh': 2.09183228, 'kWh': 0.02742258, 'time_stamp': '2016-03-28 09:00:00-07:00', 'power': 27.42258, 'device_id': 522}, {'cumul_kwh': 2.11894593, 'kWh': 0.02711365, 'time_stamp': '2016-03-28 10:00:00-07:00', 'power': 27.11365, 'device_id': 522}, {'cumul_kwh': 2.1460334, 'kWh': 0.02708747, 'time_stamp': '2016-03-28 11:00:00-07:00', 'power': 27.08747, 'device_id': 522}, {'cumul_kwh': 2.1733987, 'kWh': 0.027365300000000002, 'time_stamp': '2016-03-28 12:00:00-07:00', 'power': 27.3653, 'device_id': 522}, {'cumul_kwh': 2.20208304, 'kWh': 0.02868434, 'time_stamp': '2016-03-28 13:00:00-07:00', 'power': 28.684340000000002, 'device_id': 522}, {'cumul_kwh': 2.22986148, 'kWh': 0.02777844, 'time_stamp': '2016-03-28 14:00:00-07:00', 'power': 27.778440000000003, 'device_id': 522}, {'cumul_kwh': 2.25721711, 'kWh': 0.02735563, 'time_stamp': '2016-03-28 15:00:00-07:00', 'power': 27.355629999999998, 'device_id': 522}, {'cumul_kwh': 2.28477259, 'kWh': 0.02755548, 'time_stamp': '2016-03-28 16:00:00-07:00', 'power': 27.55548, 'device_id': 522}, {'cumul_kwh': 2.31231748, 'kWh': 0.02754489, 'time_stamp': '2016-03-28 17:00:00-07:00', 'power': 27.544890000000002, 'device_id': 522}, {'cumul_kwh': 2.33963406, 'kWh': 0.02731658, 'time_stamp': '2016-03-28 18:00:00-07:00', 'power': 27.31658, 'device_id': 522}, {'cumul_kwh': 2.36698288, 'kWh': 0.02734882, 'time_stamp': '2016-03-28 19:00:00-07:00', 'power': 27.34882, 'device_id': 522}, {'cumul_kwh': 2.39430168, 'kWh': 0.027318799999999997, 'time_stamp': '2016-03-28 20:00:00-07:00', 'power': 27.3188, 'device_id': 522}, {'cumul_kwh': 2.42174611, 'kWh': 0.02744443, 'time_stamp': '2016-03-28 21:00:00-07:00', 'power': 27.44443, 'device_id': 522}, {'cumul_kwh': 2.44956155, 'kWh': 0.02781544, 'time_stamp': '2016-03-28 22:00:00-07:00', 'power': 27.815440000000002, 'device_id': 522}, {'cumul_kwh': 2.47669533, 'kWh': 0.02713378, 'time_stamp': '2016-03-28 23:00:00-07:00', 'power': 27.133779999999998, 'device_id': 522}, {'cumul_kwh': 2.50391471, 'kWh': 0.02721938, 'time_stamp': '2016-03-29 00:00:00-07:00', 'power': 27.219379999999997, 'device_id': 522}, {'cumul_kwh': 2.53072157, 'kWh': 0.02680686, 'time_stamp': '2016-03-29 01:00:00-07:00', 'power': 26.806859999999997, 'device_id': 522}, {'cumul_kwh': 2.55977547, 'kWh': 0.029053899999999997, 'time_stamp': '2016-03-29 02:00:00-07:00', 'power': 29.0539, 'device_id': 522}, {'cumul_kwh': 2.58688161, 'kWh': 0.02710614, 'time_stamp': '2016-03-29 03:00:00-07:00', 'power': 27.106140000000003, 'device_id': 522}, {'cumul_kwh': 2.61726387, 'kWh': 0.03038226, 'time_stamp': '2016-03-29 04:00:00-07:00', 'power': 30.38226, 'device_id': 522}, {'cumul_kwh': 2.64508952, 'kWh': 0.02782565, 'time_stamp': '2016-03-29 05:00:00-07:00', 'power': 27.82565, 'device_id': 522}, {'cumul_kwh': 2.67296182, 'kWh': 0.027872300000000003, 'time_stamp': '2016-03-29 06:00:00-07:00', 'power': 27.8723, 'device_id': 522}, {'cumul_kwh': 2.70024823, 'kWh': 0.02728641, 'time_stamp': '2016-03-29 07:00:00-07:00', 'power': 27.286409999999997, 'device_id': 522}, {'cumul_kwh': 2.72818041, 'kWh': 0.02793218, 'time_stamp': '2016-03-29 08:00:00-07:00', 'power': 27.93218, 'device_id': 522}, {'cumul_kwh': 2.75539519, 'kWh': 0.02721478, 'time_stamp': '2016-03-29 09:00:00-07:00', 'power': 27.214779999999998, 'device_id': 522}, {'cumul_kwh': 2.78248988, 'kWh': 0.02709469, 'time_stamp': '2016-03-29 10:00:00-07:00', 'power': 27.094690000000003, 'device_id': 522}, {'cumul_kwh': 2.81069741, 'kWh': 0.02820753, 'time_stamp': '2016-03-29 11:00:00-07:00', 'power': 28.20753, 'device_id': 522}, {'cumul_kwh': 2.83830773, 'kWh': 0.02761032, 'time_stamp': '2016-03-29 12:00:00-07:00', 'power': 27.61032, 'device_id': 522}, {'cumul_kwh': 2.86743725, 'kWh': 0.02912952, 'time_stamp': '2016-03-29 13:00:00-07:00', 'power': 29.12952, 'device_id': 522}, {'cumul_kwh': 2.89642903, 'kWh': 0.02899178, 'time_stamp': '2016-03-29 14:00:00-07:00', 'power': 28.99178, 'device_id': 522}, {'cumul_kwh': 2.92380721, 'kWh': 0.02737818, 'time_stamp': '2016-03-29 15:00:00-07:00', 'power': 27.37818, 'device_id': 522}, {'cumul_kwh': 2.95166519, 'kWh': 0.02785798, 'time_stamp': '2016-03-29 16:00:00-07:00', 'power': 27.857979999999998, 'device_id': 522}, {'cumul_kwh': 2.97891787, 'kWh': 0.02725268, 'time_stamp': '2016-03-29 17:00:00-07:00', 'power': 27.252679999999998, 'device_id': 522}, {'cumul_kwh': 3.00652627, 'kWh': 0.0276084, 'time_stamp': '2016-03-29 18:00:00-07:00', 'power': 27.6084, 'device_id': 522}, {'cumul_kwh': 3.03547747, 'kWh': 0.0289512, 'time_stamp': '2016-03-29 19:00:00-07:00', 'power': 28.9512, 'device_id': 522}, {'cumul_kwh': 3.06416858, 'kWh': 0.02869111, 'time_stamp': '2016-03-29 20:00:00-07:00', 'power': 28.69111, 'device_id': 522}, {'cumul_kwh': 3.09169193, 'kWh': 0.02752335, 'time_stamp': '2016-03-29 21:00:00-07:00', 'power': 27.52335, 'device_id': 522}, {'cumul_kwh': 3.11985558, 'kWh': 0.02816365, 'time_stamp': '2016-03-29 22:00:00-07:00', 'power': 28.16365, 'device_id': 522}, {'cumul_kwh': 3.14715796, 'kWh': 0.02730238, 'time_stamp': '2016-03-29 23:00:00-07:00', 'power': 27.30238, 'device_id': 522}, {'cumul_kwh': 3.17465711, 'kWh': 0.02749915, 'time_stamp': '2016-03-30 00:00:00-07:00', 'power': 27.49915, 'device_id': 522}, {'cumul_kwh': 3.20323634, 'kWh': 0.02857923, 'time_stamp': '2016-03-30 01:00:00-07:00', 'power': 28.57923, 'device_id': 522}, {'cumul_kwh': 3.23218441, 'kWh': 0.02894807, 'time_stamp': '2016-03-30 02:00:00-07:00', 'power': 28.94807, 'device_id': 522}, {'cumul_kwh': 3.25987099, 'kWh': 0.02768658, 'time_stamp': '2016-03-30 03:00:00-07:00', 'power': 27.68658, 'device_id': 522}, {'cumul_kwh': 3.2897171000000003, 'kWh': 0.02984611, 'time_stamp': '2016-03-30 04:00:00-07:00', 'power': 29.846109999999996, 'device_id': 522}, {'cumul_kwh': 3.3191358999999996, 'kWh': 0.0294188, 'time_stamp': '2016-03-30 05:00:00-07:00', 'power': 29.4188, 'device_id': 522}, {'cumul_kwh': 3.35441682, 'kWh': 0.03528092, 'time_stamp': '2016-03-30 06:00:00-07:00', 'power': 35.28092, 'device_id': 522}, {'cumul_kwh': 3.38170115, 'kWh': 0.02728433, 'time_stamp': '2016-03-30 07:00:00-07:00', 'power': 27.284329999999997, 'device_id': 522}, {'cumul_kwh': 3.40885038, 'kWh': 0.02714923, 'time_stamp': '2016-03-30 08:00:00-07:00', 'power': 27.14923, 'device_id': 522}, {'cumul_kwh': 3.4356328, 'kWh': 0.02678242, 'time_stamp': '2016-03-30 09:00:00-07:00', 'power': 26.782420000000002, 'device_id': 522}, {'cumul_kwh': 3.46310316, 'kWh': 0.02747036, 'time_stamp': '2016-03-30 10:00:00-07:00', 'power': 27.47036, 'device_id': 522}, {'cumul_kwh': 3.49105961, 'kWh': 0.02795645, 'time_stamp': '2016-03-30 11:00:00-07:00', 'power': 27.95645, 'device_id': 522}, {'cumul_kwh': 3.51786945, 'kWh': 0.02680984, 'time_stamp': '2016-03-30 12:00:00-07:00', 'power': 26.80984, 'device_id': 522}, {'cumul_kwh': 3.54623092, 'kWh': 0.02836147, 'time_stamp': '2016-03-30 13:00:00-07:00', 'power': 28.36147, 'device_id': 522}, {'cumul_kwh': 3.57333195, 'kWh': 0.02710103, 'time_stamp': '2016-03-30 14:00:00-07:00', 'power': 27.101029999999998, 'device_id': 522}, {'cumul_kwh': 3.60069328, 'kWh': 0.02736133, 'time_stamp': '2016-03-30 15:00:00-07:00', 'power': 27.36133, 'device_id': 522}, {'cumul_kwh': 3.62818025, 'kWh': 0.02748697, 'time_stamp': '2016-03-30 16:00:00-07:00', 'power': 27.48697, 'device_id': 522}, {'cumul_kwh': 3.65551639, 'kWh': 0.02733614, 'time_stamp': '2016-03-30 17:00:00-07:00', 'power': 27.336140000000004, 'device_id': 522}, {'cumul_kwh': 3.68541498, 'kWh': 0.02989859, 'time_stamp': '2016-03-30 18:00:00-07:00', 'power': 29.898590000000002, 'device_id': 522}, {'cumul_kwh': 3.71392832, 'kWh': 0.02851334, 'time_stamp': '2016-03-30 19:00:00-07:00', 'power': 28.513340000000003, 'device_id': 522}, {'cumul_kwh': 3.74133847, 'kWh': 0.02741015, 'time_stamp': '2016-03-30 20:00:00-07:00', 'power': 27.41015, 'device_id': 522}, {'cumul_kwh': 3.77031158, 'kWh': 0.02897311, 'time_stamp': '2016-03-30 21:00:00-07:00', 'power': 28.97311, 'device_id': 522}, {'cumul_kwh': 3.79881577, 'kWh': 0.02850419, 'time_stamp': '2016-03-30 22:00:00-07:00', 'power': 28.50419, 'device_id': 522}, {'cumul_kwh': 3.82596185, 'kWh': 0.02714608, 'time_stamp': '2016-03-30 23:00:00-07:00', 'power': 27.146079999999998, 'device_id': 522}, {'cumul_kwh': 3.85325882, 'kWh': 0.02729697, 'time_stamp': '2016-03-31 00:00:00-07:00', 'power': 27.29697, 'device_id': 522}, {'cumul_kwh': 3.87987979, 'kWh': 0.02662097, 'time_stamp': '2016-03-31 01:00:00-07:00', 'power': 26.62097, 'device_id': 522}, {'cumul_kwh': 3.90687019, 'kWh': 0.0269904, 'time_stamp': '2016-03-31 02:00:00-07:00', 'power': 26.9904, 'device_id': 522}, {'cumul_kwh': 3.93371227, 'kWh': 0.02684208, 'time_stamp': '2016-03-31 03:00:00-07:00', 'power': 26.84208, 'device_id': 522}, {'cumul_kwh': 3.96053108, 'kWh': 0.02681881, 'time_stamp': '2016-03-31 04:00:00-07:00', 'power': 26.81881, 'device_id': 522}, {'cumul_kwh': 3.99078506, 'kWh': 0.03025398, 'time_stamp': '2016-03-31 05:00:00-07:00', 'power': 30.25398, 'device_id': 522}, {'cumul_kwh': 4.02184429, 'kWh': 0.03105923, 'time_stamp': '2016-03-31 06:00:00-07:00', 'power': 31.05923, 'device_id': 522}, {'cumul_kwh': 4.04864366, 'kWh': 0.02679937, 'time_stamp': '2016-03-31 07:00:00-07:00', 'power': 26.79937, 'device_id': 522}, {'cumul_kwh': 4.07528509, 'kWh': 0.02664143, 'time_stamp': '2016-03-31 08:00:00-07:00', 'power': 26.64143, 'device_id': 522}], 523: [{'cumul_kwh': 0.01082903, 'kWh': 0.01082903, 'time_stamp': '2016-03-25 09:00:00-07:00', 'power': 10.82903, 'device_id': 523}, {'cumul_kwh': 0.06218472, 'kWh': 0.05135569, 'time_stamp': '2016-03-25 10:00:00-07:00', 'power': 51.35569, 'device_id': 523}, {'cumul_kwh': 0.11282028, 'kWh': 0.05063556, 'time_stamp': '2016-03-25 11:00:00-07:00', 'power': 50.63556, 'device_id': 523}, {'cumul_kwh': 0.16407427, 'kWh': 0.05125399, 'time_stamp': '2016-03-25 12:00:00-07:00', 'power': 51.25399, 'device_id': 523}, {'cumul_kwh': 0.21590635, 'kWh': 0.05183208, 'time_stamp': '2016-03-25 13:00:00-07:00', 'power': 51.83208, 'device_id': 523}, {'cumul_kwh': 0.2666578, 'kWh': 0.05075145, 'time_stamp': '2016-03-25 14:00:00-07:00', 'power': 50.75145, 'device_id': 523}, {'cumul_kwh': 0.31734359, 'kWh': 0.05068579, 'time_stamp': '2016-03-25 15:00:00-07:00', 'power': 50.685790000000004, 'device_id': 523}, {'cumul_kwh': 0.36829559, 'kWh': 0.050952, 'time_stamp': '2016-03-25 16:00:00-07:00', 'power': 50.952, 'device_id': 523}, {'cumul_kwh': 0.41900183, 'kWh': 0.05070624, 'time_stamp': '2016-03-25 17:00:00-07:00', 'power': 50.70624, 'device_id': 523}, {'cumul_kwh': 0.47129877, 'kWh': 0.05229694, 'time_stamp': '2016-03-25 18:00:00-07:00', 'power': 52.29694, 'device_id': 523}, {'cumul_kwh': 0.52370799, 'kWh': 0.05240922, 'time_stamp': '2016-03-25 19:00:00-07:00', 'power': 52.40922, 'device_id': 523}, {'cumul_kwh': 0.5766671999999999, 'kWh': 0.05295921, 'time_stamp': '2016-03-25 20:00:00-07:00', 'power': 52.95921, 'device_id': 523}, {'cumul_kwh': 0.62961045, 'kWh': 0.05294325, 'time_stamp': '2016-03-25 21:00:00-07:00', 'power': 52.94325, 'device_id': 523}, {'cumul_kwh': 0.68223822, 'kWh': 0.05262777, 'time_stamp': '2016-03-25 22:00:00-07:00', 'power': 52.62777, 'device_id': 523}, {'cumul_kwh': 0.7345784000000001, 'kWh': 0.05234018, 'time_stamp': '2016-03-25 23:00:00-07:00', 'power': 52.34018, 'device_id': 523}, {'cumul_kwh': 0.7876885, 'kWh': 0.0531101, 'time_stamp': '2016-03-26 00:00:00-07:00', 'power': 53.1101, 'device_id': 523}, {'cumul_kwh': 0.84074363, 'kWh': 0.05305513, 'time_stamp': '2016-03-26 01:00:00-07:00', 'power': 53.055130000000005, 'device_id': 523}, {'cumul_kwh': 0.89367322, 'kWh': 0.05292959, 'time_stamp': '2016-03-26 02:00:00-07:00', 'power': 52.929590000000005, 'device_id': 523}, {'cumul_kwh': 0.94653642, 'kWh': 0.05286319999999999, 'time_stamp': '2016-03-26 03:00:00-07:00', 'power': 52.8632, 'device_id': 523}, {'cumul_kwh': 0.99979802, 'kWh': 0.0532616, 'time_stamp': '2016-03-26 04:00:00-07:00', 'power': 53.2616, 'device_id': 523}, {'cumul_kwh': 1.05311568, 'kWh': 0.05331766, 'time_stamp': '2016-03-26 05:00:00-07:00', 'power': 53.31766, 'device_id': 523}, {'cumul_kwh': 1.10648745, 'kWh': 0.05337177, 'time_stamp': '2016-03-26 06:00:00-07:00', 'power': 53.37177, 'device_id': 523}, {'cumul_kwh': 1.1599678, 'kWh': 0.05348035, 'time_stamp': '2016-03-26 07:00:00-07:00', 'power': 53.48035, 'device_id': 523}, {'cumul_kwh': 1.2130998, 'kWh': 0.053132000000000006, 'time_stamp': '2016-03-26 08:00:00-07:00', 'power': 53.132, 'device_id': 523}, {'cumul_kwh': 1.26602432, 'kWh': 0.05292452, 'time_stamp': '2016-03-26 09:00:00-07:00', 'power': 52.924519999999994, 'device_id': 523}, {'cumul_kwh': 1.31920097, 'kWh': 0.05317665, 'time_stamp': '2016-03-26 10:00:00-07:00', 'power': 53.17665, 'device_id': 523}, {'cumul_kwh': 1.37277762, 'kWh': 0.05357665, 'time_stamp': '2016-03-26 11:00:00-07:00', 'power': 53.57665, 'device_id': 523}, {'cumul_kwh': 1.42541377, 'kWh': 0.05263615, 'time_stamp': '2016-03-26 12:00:00-07:00', 'power': 52.63615, 'device_id': 523}, {'cumul_kwh': 1.4780796999999999, 'kWh': 0.05266593, 'time_stamp': '2016-03-26 13:00:00-07:00', 'power': 52.66593, 'device_id': 523}, {'cumul_kwh': 1.53071585, 'kWh': 0.05263615, 'time_stamp': '2016-03-26 14:00:00-07:00', 'power': 52.63615, 'device_id': 523}, {'cumul_kwh': 1.58437363, 'kWh': 0.05365778, 'time_stamp': '2016-03-26 15:00:00-07:00', 'power': 53.65778, 'device_id': 523}, {'cumul_kwh': 1.63741184, 'kWh': 0.05303821, 'time_stamp': '2016-03-26 16:00:00-07:00', 'power': 53.03821, 'device_id': 523}, {'cumul_kwh': 1.69081907, 'kWh': 0.05340723, 'time_stamp': '2016-03-26 17:00:00-07:00', 'power': 53.407230000000006, 'device_id': 523}, {'cumul_kwh': 1.72091264, 'kWh': 0.03009357, 'time_stamp': '2016-03-26 18:00:00-07:00', 'power': 30.09357, 'device_id': 523}, {'cumul_kwh': 1.77404804, 'kWh': 0.053135400000000006, 'time_stamp': '2016-03-26 19:00:00-07:00', 'power': 53.1354, 'device_id': 523}, {'cumul_kwh': 1.82706897, 'kWh': 0.05302093, 'time_stamp': '2016-03-26 20:00:00-07:00', 'power': 53.02093000000001, 'device_id': 523}, {'cumul_kwh': 1.87954591, 'kWh': 0.05247694, 'time_stamp': '2016-03-26 21:00:00-07:00', 'power': 52.47694, 'device_id': 523}, {'cumul_kwh': 1.9318436, 'kWh': 0.05229769, 'time_stamp': '2016-03-26 22:00:00-07:00', 'power': 52.29769, 'device_id': 523}, {'cumul_kwh': 1.98404809, 'kWh': 0.05220449, 'time_stamp': '2016-03-26 23:00:00-07:00', 'power': 52.20449, 'device_id': 523}, {'cumul_kwh': 2.03641818, 'kWh': 0.05237009, 'time_stamp': '2016-03-27 00:00:00-07:00', 'power': 52.370090000000005, 'device_id': 523}, {'cumul_kwh': 2.08922783, 'kWh': 0.05280965, 'time_stamp': '2016-03-27 01:00:00-07:00', 'power': 52.80965, 'device_id': 523}, {'cumul_kwh': 2.14222433, 'kWh': 0.0529965, 'time_stamp': '2016-03-27 02:00:00-07:00', 'power': 52.9965, 'device_id': 523}, {'cumul_kwh': 2.19534472, 'kWh': 0.05312039, 'time_stamp': '2016-03-27 03:00:00-07:00', 'power': 53.12039, 'device_id': 523}, {'cumul_kwh': 2.24830595, 'kWh': 0.05296123, 'time_stamp': '2016-03-27 04:00:00-07:00', 'power': 52.96123000000001, 'device_id': 523}, {'cumul_kwh': 2.30134315, 'kWh': 0.05303719999999999, 'time_stamp': '2016-03-27 05:00:00-07:00', 'power': 53.0372, 'device_id': 523}, {'cumul_kwh': 2.35467224, 'kWh': 0.05332909, 'time_stamp': '2016-03-27 06:00:00-07:00', 'power': 53.32909, 'device_id': 523}, {'cumul_kwh': 2.4077476000000004, 'kWh': 0.05307536, 'time_stamp': '2016-03-27 07:00:00-07:00', 'power': 53.075359999999996, 'device_id': 523}, {'cumul_kwh': 2.460799, 'kWh': 0.0530514, 'time_stamp': '2016-03-27 08:00:00-07:00', 'power': 53.0514, 'device_id': 523}, {'cumul_kwh': 2.51353465, 'kWh': 0.05273565, 'time_stamp': '2016-03-27 09:00:00-07:00', 'power': 52.73565, 'device_id': 523}, {'cumul_kwh': 2.57974076, 'kWh': 0.06620611, 'time_stamp': '2016-03-27 10:00:00-07:00', 'power': 66.20611, 'device_id': 523}, {'cumul_kwh': 2.68522819, 'kWh': 0.10548743, 'time_stamp': '2016-03-27 11:00:00-07:00', 'power': 105.48743, 'device_id': 523}, {'cumul_kwh': 2.79079772, 'kWh': 0.10556953, 'time_stamp': '2016-03-27 12:00:00-07:00', 'power': 105.56953, 'device_id': 523}, {'cumul_kwh': 2.84347925, 'kWh': 0.05268153, 'time_stamp': '2016-03-27 13:00:00-07:00', 'power': 52.68153, 'device_id': 523}, {'cumul_kwh': 2.89592837, 'kWh': 0.05244912, 'time_stamp': '2016-03-27 14:00:00-07:00', 'power': 52.44911999999999, 'device_id': 523}, {'cumul_kwh': 2.94836717, 'kWh': 0.0524388, 'time_stamp': '2016-03-27 15:00:00-07:00', 'power': 52.4388, 'device_id': 523}, {'cumul_kwh': 3.00066132, 'kWh': 0.05229415, 'time_stamp': '2016-03-27 16:00:00-07:00', 'power': 52.29415, 'device_id': 523}, {'cumul_kwh': 3.05300579, 'kWh': 0.05234447, 'time_stamp': '2016-03-27 17:00:00-07:00', 'power': 52.34447, 'device_id': 523}, {'cumul_kwh': 3.10550385, 'kWh': 0.05249806, 'time_stamp': '2016-03-27 18:00:00-07:00', 'power': 52.498059999999995, 'device_id': 523}, {'cumul_kwh': 3.15876123, 'kWh': 0.05325738, 'time_stamp': '2016-03-27 19:00:00-07:00', 'power': 53.257380000000005, 'device_id': 523}, {'cumul_kwh': 3.2117704, 'kWh': 0.05300917, 'time_stamp': '2016-03-27 20:00:00-07:00', 'power': 53.00917, 'device_id': 523}, {'cumul_kwh': 3.2646336, 'kWh': 0.05286319999999999, 'time_stamp': '2016-03-27 21:00:00-07:00', 'power': 52.8632, 'device_id': 523}, {'cumul_kwh': 3.2646336, 'kWh': 0.0, 'time_stamp': '2016-03-27 22:00:00-07:00', 'power': 0.0, 'device_id': 523}, {'cumul_kwh': 3.2646336, 'kWh': 0.0, 'time_stamp': '2016-03-27 23:00:00-07:00', 'power': 0.0, 'device_id': 523}, {'cumul_kwh': 3.28040214, 'kWh': 0.01576854, 'time_stamp': '2016-03-28 00:00:00-07:00', 'power': 15.76854, 'device_id': 523}, {'cumul_kwh': 3.33237346, 'kWh': 0.05197132, 'time_stamp': '2016-03-28 01:00:00-07:00', 'power': 51.97132, 'device_id': 523}, {'cumul_kwh': 3.3849817000000004, 'kWh': 0.05260824, 'time_stamp': '2016-03-28 02:00:00-07:00', 'power': 52.60824, 'device_id': 523}, {'cumul_kwh': 3.43762702, 'kWh': 0.05264532, 'time_stamp': '2016-03-28 03:00:00-07:00', 'power': 52.64532, 'device_id': 523}, {'cumul_kwh': 3.4901953000000003, 'kWh': 0.05256828, 'time_stamp': '2016-03-28 04:00:00-07:00', 'power': 52.56828, 'device_id': 523}, {'cumul_kwh': 3.54300588, 'kWh': 0.05281058, 'time_stamp': '2016-03-28 05:00:00-07:00', 'power': 52.81058, 'device_id': 523}, {'cumul_kwh': 3.59565629, 'kWh': 0.05265041, 'time_stamp': '2016-03-28 06:00:00-07:00', 'power': 52.65041, 'device_id': 523}, {'cumul_kwh': 3.64785824, 'kWh': 0.05220195, 'time_stamp': '2016-03-28 07:00:00-07:00', 'power': 52.20195, 'device_id': 523}, {'cumul_kwh': 3.69993638, 'kWh': 0.05207814, 'time_stamp': '2016-03-28 08:00:00-07:00', 'power': 52.078140000000005, 'device_id': 523}, {'cumul_kwh': 3.7516032999999998, 'kWh': 0.05166692, 'time_stamp': '2016-03-28 09:00:00-07:00', 'power': 51.666920000000005, 'device_id': 523}, {'cumul_kwh': 3.80303676, 'kWh': 0.05143346, 'time_stamp': '2016-03-28 10:00:00-07:00', 'power': 51.43346, 'device_id': 523}, {'cumul_kwh': 3.85461595, 'kWh': 0.05157919, 'time_stamp': '2016-03-28 11:00:00-07:00', 'power': 51.579190000000004, 'device_id': 523}, {'cumul_kwh': 3.906547, 'kWh': 0.05193105, 'time_stamp': '2016-03-28 12:00:00-07:00', 'power': 51.93105, 'device_id': 523}, {'cumul_kwh': 3.95824266, 'kWh': 0.05169566, 'time_stamp': '2016-03-28 13:00:00-07:00', 'power': 51.69566, 'device_id': 523}, {'cumul_kwh': 4.0091358, 'kWh': 0.05089314, 'time_stamp': '2016-03-28 14:00:00-07:00', 'power': 50.89314, 'device_id': 523}, {'cumul_kwh': 4.06018002, 'kWh': 0.05104422, 'time_stamp': '2016-03-28 15:00:00-07:00', 'power': 51.04422, 'device_id': 523}, {'cumul_kwh': 4.11191855, 'kWh': 0.05173853, 'time_stamp': '2016-03-28 16:00:00-07:00', 'power': 51.73853, 'device_id': 523}, {'cumul_kwh': 4.1642249, 'kWh': 0.05230635, 'time_stamp': '2016-03-28 17:00:00-07:00', 'power': 52.30635, 'device_id': 523}, {'cumul_kwh': 4.21574852, 'kWh': 0.05152362, 'time_stamp': '2016-03-28 18:00:00-07:00', 'power': 51.52362, 'device_id': 523}, {'cumul_kwh': 4.26756304, 'kWh': 0.05181452, 'time_stamp': '2016-03-28 19:00:00-07:00', 'power': 51.81452, 'device_id': 523}, {'cumul_kwh': 4.3188343, 'kWh': 0.05127126, 'time_stamp': '2016-03-28 20:00:00-07:00', 'power': 51.27126, 'device_id': 523}, {'cumul_kwh': 4.37045224, 'kWh': 0.05161794, 'time_stamp': '2016-03-28 21:00:00-07:00', 'power': 51.617940000000004, 'device_id': 523}, {'cumul_kwh': 4.42163956, 'kWh': 0.05118732, 'time_stamp': '2016-03-28 22:00:00-07:00', 'power': 51.18732, 'device_id': 523}, {'cumul_kwh': 4.47305632, 'kWh': 0.05141676, 'time_stamp': '2016-03-28 23:00:00-07:00', 'power': 51.41676, 'device_id': 523}, {'cumul_kwh': 4.52441584, 'kWh': 0.05135952, 'time_stamp': '2016-03-29 00:00:00-07:00', 'power': 51.35952, 'device_id': 523}, {'cumul_kwh': 4.57470454, 'kWh': 0.05028869999999999, 'time_stamp': '2016-03-29 01:00:00-07:00', 'power': 50.2887, 'device_id': 523}, {'cumul_kwh': 4.6259002, 'kWh': 0.05119566, 'time_stamp': '2016-03-29 02:00:00-07:00', 'power': 51.19566, 'device_id': 523}, {'cumul_kwh': 4.67745499, 'kWh': 0.05155479, 'time_stamp': '2016-03-29 03:00:00-07:00', 'power': 51.554790000000004, 'device_id': 523}, {'cumul_kwh': 4.72962193, 'kWh': 0.05216694, 'time_stamp': '2016-03-29 04:00:00-07:00', 'power': 52.166940000000004, 'device_id': 523}, {'cumul_kwh': 4.78206333, 'kWh': 0.0524414, 'time_stamp': '2016-03-29 05:00:00-07:00', 'power': 52.4414, 'device_id': 523}, {'cumul_kwh': 4.83418868, 'kWh': 0.05212535, 'time_stamp': '2016-03-29 06:00:00-07:00', 'power': 52.12535, 'device_id': 523}, {'cumul_kwh': 4.88582244, 'kWh': 0.05163376, 'time_stamp': '2016-03-29 07:00:00-07:00', 'power': 51.633759999999995, 'device_id': 523}, {'cumul_kwh': 4.937078700000001, 'kWh': 0.05125626, 'time_stamp': '2016-03-29 08:00:00-07:00', 'power': 51.25626, 'device_id': 523}, {'cumul_kwh': 4.98891382, 'kWh': 0.05183512, 'time_stamp': '2016-03-29 09:00:00-07:00', 'power': 51.83512, 'device_id': 523}, {'cumul_kwh': 5.04032434, 'kWh': 0.05141052, 'time_stamp': '2016-03-29 10:00:00-07:00', 'power': 51.41052, 'device_id': 523}, {'cumul_kwh': 5.0916682, 'kWh': 0.05134386, 'time_stamp': '2016-03-29 11:00:00-07:00', 'power': 51.34386, 'device_id': 523}, {'cumul_kwh': 5.14306048, 'kWh': 0.05139228, 'time_stamp': '2016-03-29 12:00:00-07:00', 'power': 51.39228, 'device_id': 523}, {'cumul_kwh': 5.19486322, 'kWh': 0.05180274, 'time_stamp': '2016-03-29 13:00:00-07:00', 'power': 51.80274, 'device_id': 523}, {'cumul_kwh': 5.24625719, 'kWh': 0.05139397, 'time_stamp': '2016-03-29 14:00:00-07:00', 'power': 51.39397, 'device_id': 523}, {'cumul_kwh': 5.29799153, 'kWh': 0.05173434, 'time_stamp': '2016-03-29 15:00:00-07:00', 'power': 51.73434, 'device_id': 523}, {'cumul_kwh': 5.34983419, 'kWh': 0.05184266, 'time_stamp': '2016-03-29 16:00:00-07:00', 'power': 51.842659999999995, 'device_id': 523}, {'cumul_kwh': 5.40169757, 'kWh': 0.05186338, 'time_stamp': '2016-03-29 17:00:00-07:00', 'power': 51.86338, 'device_id': 523}, {'cumul_kwh': 5.45438461, 'kWh': 0.05268704, 'time_stamp': '2016-03-29 18:00:00-07:00', 'power': 52.68704, 'device_id': 523}, {'cumul_kwh': 5.50650457, 'kWh': 0.05211996, 'time_stamp': '2016-03-29 19:00:00-07:00', 'power': 52.11996, 'device_id': 523}, {'cumul_kwh': 5.55883045, 'kWh': 0.05232588, 'time_stamp': '2016-03-29 20:00:00-07:00', 'power': 52.32588, 'device_id': 523}, {'cumul_kwh': 5.61027763, 'kWh': 0.05144718, 'time_stamp': '2016-03-29 21:00:00-07:00', 'power': 51.447179999999996, 'device_id': 523}, {'cumul_kwh': 5.66186859, 'kWh': 0.05159096, 'time_stamp': '2016-03-29 22:00:00-07:00', 'power': 51.590959999999995, 'device_id': 523}, {'cumul_kwh': 5.71328805, 'kWh': 0.05141946, 'time_stamp': '2016-03-29 23:00:00-07:00', 'power': 51.41946, 'device_id': 523}, {'cumul_kwh': 5.76442059, 'kWh': 0.05113254, 'time_stamp': '2016-03-30 00:00:00-07:00', 'power': 51.132540000000006, 'device_id': 523}, {'cumul_kwh': 5.81525817, 'kWh': 0.05083758, 'time_stamp': '2016-03-30 01:00:00-07:00', 'power': 50.837579999999996, 'device_id': 523}, {'cumul_kwh': 5.86744392, 'kWh': 0.05218575, 'time_stamp': '2016-03-30 02:00:00-07:00', 'power': 52.18575, 'device_id': 523}, {'cumul_kwh': 5.91977342, 'kWh': 0.052329499999999994, 'time_stamp': '2016-03-30 03:00:00-07:00', 'power': 52.3295, 'device_id': 523}, {'cumul_kwh': 5.97140281, 'kWh': 0.05162939, 'time_stamp': '2016-03-30 04:00:00-07:00', 'power': 51.62939, 'device_id': 523}, {'cumul_kwh': 6.02247799, 'kWh': 0.05107518, 'time_stamp': '2016-03-30 05:00:00-07:00', 'power': 51.075179999999996, 'device_id': 523}, {'cumul_kwh': 6.07611777, 'kWh': 0.05363978, 'time_stamp': '2016-03-30 06:00:00-07:00', 'power': 53.63978, 'device_id': 523}, {'cumul_kwh': 6.12998474, 'kWh': 0.05386697, 'time_stamp': '2016-03-30 07:00:00-07:00', 'power': 53.866969999999995, 'device_id': 523}, {'cumul_kwh': 6.18349475, 'kWh': 0.05351001, 'time_stamp': '2016-03-30 08:00:00-07:00', 'power': 53.51001, 'device_id': 523}, {'cumul_kwh': 6.23585948, 'kWh': 0.05236473, 'time_stamp': '2016-03-30 09:00:00-07:00', 'power': 52.36473, 'device_id': 523}, {'cumul_kwh': 6.28949765, 'kWh': 0.05363817, 'time_stamp': '2016-03-30 10:00:00-07:00', 'power': 53.638169999999995, 'device_id': 523}, {'cumul_kwh': 6.34273111, 'kWh': 0.05323346, 'time_stamp': '2016-03-30 11:00:00-07:00', 'power': 53.23346, 'device_id': 523}, {'cumul_kwh': 6.39413609, 'kWh': 0.05140498, 'time_stamp': '2016-03-30 12:00:00-07:00', 'power': 51.40498, 'device_id': 523}, {'cumul_kwh': 6.44761782, 'kWh': 0.05348173, 'time_stamp': '2016-03-30 13:00:00-07:00', 'power': 53.481730000000006, 'device_id': 523}, {'cumul_kwh': 6.49960296, 'kWh': 0.05198514, 'time_stamp': '2016-03-30 14:00:00-07:00', 'power': 51.98514, 'device_id': 523}, {'cumul_kwh': 6.55289407, 'kWh': 0.05329111, 'time_stamp': '2016-03-30 15:00:00-07:00', 'power': 53.291109999999996, 'device_id': 523}, {'cumul_kwh': 6.60522548, 'kWh': 0.05233141, 'time_stamp': '2016-03-30 16:00:00-07:00', 'power': 52.33141, 'device_id': 523}, {'cumul_kwh': 6.65837219, 'kWh': 0.05314671, 'time_stamp': '2016-03-30 17:00:00-07:00', 'power': 53.14671, 'device_id': 523}, {'cumul_kwh': 6.71046019, 'kWh': 0.052088, 'time_stamp': '2016-03-30 18:00:00-07:00', 'power': 52.088, 'device_id': 523}, {'cumul_kwh': 6.76278695, 'kWh': 0.05232676, 'time_stamp': '2016-03-30 19:00:00-07:00', 'power': 52.32676, 'device_id': 523}, {'cumul_kwh': 6.81654715, 'kWh': 0.053760199999999994, 'time_stamp': '2016-03-30 20:00:00-07:00', 'power': 53.7602, 'device_id': 523}, {'cumul_kwh': 6.86910317, 'kWh': 0.05255602, 'time_stamp': '2016-03-30 21:00:00-07:00', 'power': 52.55602, 'device_id': 523}, {'cumul_kwh': 6.922491900000001, 'kWh': 0.05338873, 'time_stamp': '2016-03-30 22:00:00-07:00', 'power': 53.38873, 'device_id': 523}, {'cumul_kwh': 6.975953, 'kWh': 0.0534611, 'time_stamp': '2016-03-30 23:00:00-07:00', 'power': 53.4611, 'device_id': 523}, {'cumul_kwh': 7.02912364, 'kWh': 0.05317064, 'time_stamp': '2016-03-31 00:00:00-07:00', 'power': 53.17064, 'device_id': 523}, {'cumul_kwh': 7.08135018, 'kWh': 0.05222654, 'time_stamp': '2016-03-31 01:00:00-07:00', 'power': 52.22654, 'device_id': 523}, {'cumul_kwh': 7.13340346, 'kWh': 0.05205328, 'time_stamp': '2016-03-31 02:00:00-07:00', 'power': 52.05328, 'device_id': 523}, {'cumul_kwh': 7.18555358, 'kWh': 0.05215012, 'time_stamp': '2016-03-31 03:00:00-07:00', 'power': 52.15012, 'device_id': 523}, {'cumul_kwh': 7.23760927, 'kWh': 0.05205569, 'time_stamp': '2016-03-31 04:00:00-07:00', 'power': 52.055690000000006, 'device_id': 523}, {'cumul_kwh': 7.28926435, 'kWh': 0.05165508, 'time_stamp': '2016-03-31 05:00:00-07:00', 'power': 51.65508, 'device_id': 523}, {'cumul_kwh': 7.34078556, 'kWh': 0.05152121, 'time_stamp': '2016-03-31 06:00:00-07:00', 'power': 51.521209999999996, 'device_id': 523}, {'cumul_kwh': 7.39405322, 'kWh': 0.05326766, 'time_stamp': '2016-03-31 07:00:00-07:00', 'power': 53.26766, 'device_id': 523}, {'cumul_kwh': 7.44765459, 'kWh': 0.05360137, 'time_stamp': '2016-03-31 08:00:00-07:00', 'power': 53.601369999999996, 'device_id': 523}]};
    var xCoords = [];
    var devSeries = []
    // for each device
    Object.keys(parsed_data).forEach(function(device_id, idx) {
        var device_entries = parsed_data[device_id];
        var device_series_obj = {"name": "Device " + device_id, "data": []};
        // for each data point in a given device
        device_entries.forEach(function(device_entry) {
            if (idx == 0) {
                xCoords.push(device_entry["time_stamp"]);
            }
            device_series_obj["data"].push(device_entry["kWh"]);
        });
        devSeries.push(device_series_obj);
    });
    Highcharts.chart('chart1', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Population Growth by Region'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: xCoords,
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'kWh'
            },
            labels: {
                // formatter: function () {
                //     return this.value / 1000;
                // }
            }
        },
        tooltip: {
            split: true,
            // valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: devSeries
    });
});