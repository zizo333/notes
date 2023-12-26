void main() {
  String text = r'hello\t world!';
  print(text);
}
/*
import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:easy_localization/easy_localization.dart';
import 'package:http/http.dart' as http;

import '../constants/api_constants.dart';
import '../resources/string_manager.dart';
import 'api_response.dart';
import 'app_failure.dart';

class ApiClient {
  static const int _timeOut = 300;

  Future<ApiResponse> get(
    String path, {
    String? baseUrl,
    Uri? uri,
    Map<String, String>? headers,
    Map<String, dynamic>? parameters,
    int? timeOut,
  }) async {
    final url =
        uri ?? Uri.http(baseUrl ?? ApiConstants.storeBaseUrl, path, parameters);
    print("=============================URL=============================");
    print(url);

    return await requestServer(() async {
      final response = await http
          .get(url, headers: headers)
          .timeout(Duration(seconds: timeOut ?? _timeOut));
      print('data: ${response.body}');
      print('statusCode: ${response.statusCode}');
      print('message: ${response.reasonPhrase}');
      return _handleStatusCode(response);
    });
  }

  Future<ApiResponse> post(
    String path, {
    String? baseUrl,
    dynamic body,
    Map<String, String>? headers,
    Map<String, dynamic>? parameters,
    bool encodeBody = true,
    int? timeOut,
  }) async {
    final url =
        Uri.http(baseUrl ?? ApiConstants.storeBaseUrl, path, parameters);
    print('url: $url');
    print('headers: $headers');
    print('body: $body');
    return await requestServer(() async {
      final response = await http
          .post(
            url,
            body: body == null
                ? {}
                : encodeBody
                    ? jsonEncode(body)
                    : body,
            headers: headers,
          )
          .timeout(Duration(seconds: timeOut ?? _timeOut));
      print('data: ${response.body}');
      print('statusCode: ${response.statusCode}');
      print('message: ${response.reasonPhrase}');
      return _handleStatusCode(response);
    });
  }

  Future<ApiResponse> delete(
    String path, {
    String? baseUrl,
    Map<String, dynamic>? body,
    Map<String, String>? headers,
    Map<String, dynamic>? parameters,
  }) async {
    final url =
        Uri.http(baseUrl ?? ApiConstants.storeBaseUrl, path, parameters);
    return await requestServer(() async {
      final response = await http
          .delete(
            url,
            body: body == null ? null : jsonEncode(body),
            headers: headers,
          )
          .timeout(const Duration(seconds: _timeOut));
      return _handleStatusCode(response);
    });
  }

  Future<ApiResponse> update(
    String path, {
    String? baseUrl,
    dynamic body,
    Map<String, String>? headers,
    Map<String, dynamic>? parameters,
    bool encodeBody = true,
    int? timeOut,
  }) async {
    final url =
        Uri.http(baseUrl ?? ApiConstants.storeBaseUrl, path, parameters);
    print('url: $url');
    print('headers: $headers');
    print('body: $body');
    return await requestServer(() async {
      final response = await http
          .put(
            url,
            body: body == null
                ? {}
                : encodeBody
                    ? jsonEncode(body)
                    : body,
            headers: headers,
          )
          .timeout(Duration(seconds: timeOut ?? _timeOut));
      print('data: ${response.body}');
      print('statusCode: ${response.statusCode}');
      print('message: ${response.reasonPhrase}');
      return _handleStatusCode(response);
    });
  }

  Future<ApiResponse> requestServer(
      Future<ApiResponse> Function() computation) async {
    try {
      return await computation();
    } on SocketException {
      throw AppFailure(message: AppString.noInternetConnection.tr());
    } on FormatException {
      throw AppFailure(message: AppString.formatError.tr());
    } on HttpException {
      throw AppFailure(message: AppString.somethingWentWrong.tr());
    } on TimeoutException {
      throw AppFailure(message: AppString.timeoutError.tr());
    } on Exception catch (error) {
      print(error.toString());
      throw AppFailure(message: AppString.somethingWentWrong.tr());
    }
  }

  ApiResponse _handleStatusCode(http.Response response) {
    switch (response.statusCode) {
      case 200:
      case 201:
      case 202:
        final headers = response.headers;
        dynamic body;
        dynamic data;
        bool success = false;
        int status = 0;
        String message = '';
        try {
          if (response.headers['content-disposition'] == null) {
            print(1);
            body = json.decode(utf8.decode(response.bodyBytes));
          } else {
            print(2);
            body = jsonDecode(response.body);
          }
          if (body['success'] != null) {
            print(3);
            data = body['data'];
            success = body['success'];
            status = body['status'];
            message = body['message'];
          } else {
            print(4);
            data = body;
          }
          if (!success) {
            //TODO: later
          }
        } catch (error) {
          print(5);
          throw AppFailure(
            message: error.toString(),
            code: response.statusCode,
          );
        }
        return ApiResponse(
          data: data,
          success: success,
          status: status,
          message: message,
          headers: headers,
          bodyBytes: response.bodyBytes,
        );
      case 204:
        //TODO: later
        return ApiResponse(
          data: true,
          success: false,
          status: 0,
          message: '',
          headers: true,
          bodyBytes: response.bodyBytes,
        );
      case 400:
        throw AppFailure(message: AppString.badRequestError.tr());
      case 401:
        throw AppFailure(message: ("noPermission").tr());
      case 403:
        throw AppFailure(message: AppString.unauthorizedError.tr());
      case 404:
        throw AppFailure(
            message: AppString.notFound.tr(), code: response.statusCode);
      case 500:
      default:
        throw AppFailure(
          message: response.reasonPhrase?.toString() ??
              AppString.somethingWentWrong.tr(),
          code: response.statusCode,
        );
    }
  }
}
*/

/*
private val SERVICE_ID = 1
    private val CHANNEL_ID = "my_channel_id"

    override fun onBind(p0: Intent?): IBinder? {
        TODO("Not yet implemented")
    }

    override fun onCreate() {
        super.onCreate()
        createChannel()
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        showNotification()
        return super.onStartCommand(intent, flags, startId)
    }

    private fun createChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(CHANNEL_ID, "Default", NotificationManager.IMPORTANCE_HIGH)
            val manager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            manager.createNotificationChannel(channel)
        }
    }

    private fun showNotification() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val notification = Notification.Builder(this, CHANNEL_ID).apply {
                setContentTitle("Notification title")
                setContentText("This is content")
            }.build()
            startForeground(SERVICE_ID, notification);
        }
    }
*/