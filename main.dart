void main() async {
  String text = r'hello\t world!';
  print(text);
  p();
  avd().asBroadcastStream().listen((event) => print(event));
  avd().asBroadcastStream().listen((event) => print(event * 2));
  print('object');
}

void p() async {
  print(await pr());
}

Future<String> pr() async {
  return await Future.delayed(const Duration(seconds: 4), () => 'zizo');
}

Stream<int> avd() => Stream.periodic(Duration(seconds: 2), (val) => val);
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
/*
import 'package:easy_localization/easy_localization.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:resort/core/enums/enums.dart';
import 'package:resort/core/resources/string_manager.dart';
import 'package:resort/core/shared/shared_data.dart';
import 'package:resort/di/di.dart';
import 'package:resort/features/invoices_entries_rasd/data/models/bill/bill.dart';
import 'package:resort/features/invoices_entries_rasd/data/models/bill_data.dart';
import 'package:resort/features/invoices_entries_rasd/data/models/currency/currency.dart';
import 'package:resort/features/invoices_entries_rasd/data/models/item/item.dart';
import 'package:resort/features/invoices_entries_rasd/data/repositories/invoices_repository.dart';
import 'package:resort/features/invoices_entries_rasd/data/repositories/items_repository.dart';

import '../../data/models/mobile_invoice_data_vm/mobile_invoice_data_vm.dart';

part 'invoice_list_state.dart';

class InvoiceListCubit extends Cubit<InvoiceListState> {
  final InvoicesRepository _invoicesRepository;
  final ItemsRepository _itemsRepository;

  InvoiceListCubit(
    this._invoicesRepository,
    this._itemsRepository,
  ) : super(InvoiceListState.init());

  List<Bill> _onlineBills = [];
  List<Bill> _offlineBills = [];
  List<Bill> get _allBills => [..._offlineBills, ..._onlineBills];
  List<Item> items = [];

  void fetchBillsByType() async {
    final typeGuid = sl<SharedData>().invoiceType!.guid;
    emit(state.copyWith(requestState: RequestState.loading));
    final offlineInvoices =
        await _invoicesRepository.fetchOfflineInvoices(typeGuid);
    _offlineBills = offlineInvoices
        .map((invoice) => Bill.fromOfflineInvoice(invoice))
        .toList();
    final result = await _invoicesRepository.fetchOnlineBills(typeGuid);
    result.fold((failure) {
      emit(state.copyWith(
        requestState: RequestState.error,
        message: failure.message,
      ));
    }, (onlineBills) async {
      _onlineBills = onlineBills;
      List<Currency> currencies = [];
      (await _invoicesRepository.fetchCurrencies()).fold((_) {},
          (currenciesList) {
        currencies = currenciesList;
      });
      emit(state.copyWith(
        requestState: RequestState.loaded,
        offlineBills: _offlineBills,
        offlineInvoices: offlineInvoices,
        onlineBills: _onlineBills,
        currency: currencies.first,
      ));
    });
  }

  void searchInvoice(String searchTxt) {
    List<Bill> bills = _allBills.where((bill) {
      return bill.billNo.toLowerCase().contains(searchTxt.toLowerCase()) ||
          bill.custName.toLowerCase().contains(searchTxt.toLowerCase());
    }).toList();
    if (searchTxt.isEmpty) {
      bills = _allBills;
    }

    emit(state.copyWith(
      onlineBills: bills,
      actionState: RequestState.none,
    ));
  }

  deleteBill(Bill bill) async {
    emit(state.copyWith(actionState: RequestState.loading));
    final result = await _invoicesRepository.deleteBill(bill.guid);
    result.fold((failure) {
      emit(state.copyWith(
        actionState: RequestState.error,
        message: failure.message,
      ));
    }, (_) {
      _onlineBills.remove(bill);
      emit(state.copyWith(
        actionState: RequestState.loaded,
        onlineBills: _onlineBills,
        message: AppString.deletedSuccessfully.tr(),
      ));
    });
  }

  deleteOfflineInvoice(Bill bill) async {
    await _invoicesRepository.deleteSyncMobileInvoiceData(bill.date);
    _onlineBills.remove(bill);
    emit(state.copyWith(
      onlineBills: _onlineBills,
      actionState: RequestState.none,
    ));
  }

  saveBill(Bill bill, int index) async {
    emit(state.copyWith(
      savingBill: bill,
      actionState: RequestState.none,
    ));
    final offlineInvoices =
        await _invoicesRepository.getSyncMobileInvoiceData();
    final mobileInvoiceDataVM = offlineInvoices
        .firstWhere((invoice) => invoice.mobileInvoiceVM.guid == bill.guid);
    final mobileInvoiceDataVMResult =
        await _invoicesRepository.addMobileInvoice(mobileInvoiceDataVM);
    mobileInvoiceDataVMResult.fold((failure) {
      emit(state.copyWith(
        savingBill: null,
        actionState: RequestState.error,
        message: failure.message,
      ));
    }, (invoice) {
      deleteOfflineInvoice(bill);
      _onlineBills.insert(
          index,
          Bill.fromOfflineInvoice(
            mobileInvoiceDataVM,
            isOffline: false,
          ));
      emit(state.copyWith(
        savingBill: null,
        onlineBills: _onlineBills,
        actionState: RequestState.loaded,
      ));
    });
  }

  Future<BillResponse?> getBill(String billGuid) async {
    emit(state.copyWith(actionState: RequestState.loading));
    final itemsResult = await _itemsRepository.fetchItems();
    return itemsResult.fold(
      (failure) {
        emit(state.copyWith(
          actionState: RequestState.error,
          message: failure.message,
        ));
        return null;
      },
      (items) async {
        this.items = items;
        final result = await _invoicesRepository.getBillData(billGuid);
        return result.fold((failure) {
          emit(state.copyWith(
            actionState: RequestState.error,
            message: failure.message,
          ));
          return null;
        }, (billResponse) async {
          emit(state.copyWith(actionState: RequestState.none));
          return billResponse;
        });
      },
    );
  }

  num get totalBeforeVatAmount {
    return state.offlineInvoices.fold(
      0,
      (previousValue, invoice) => previousValue + invoice.mobileInvoiceVM.total,
    );
  }

  num get totalAdds {
    return state.offlineInvoices.fold(
      0,
      (previous, invoice) =>
          previous +
          invoice.mobileInvoiceItemsVM
              .fold(0, (previous, item) => previous + item.extra),
    );
  }

  num get totalDiscounts {
    return state.offlineInvoices.fold(
      0,
      (previous, invoice) =>
          previous +
          invoice.mobileInvoiceItemsVM
              .fold(0, (previous, item) => previous + item.disc),
    );
  }

  num get totalAddTax {
    return state.offlineInvoices.fold(
      0,
      (previousValue, invoice) =>
          previousValue + invoice.mobileInvoiceVM.addTax,
    );
  }

  num get totalWithVatAmount {
    return state.offlineInvoices.fold(
      0,
      (previousValue, invoice) =>
          previousValue +
          invoice.mobileInvoiceVM.total +
          invoice.mobileInvoiceVM.addTax,
    );
  }

  num get invoiceDiscs {
    return state.offlineInvoices.fold(
      0,
      (previous, invoice) =>
          previous +
          invoice.mobileDiscs.fold(0,
              (previous, addDiscs) => previous + (addDiscs.discValue ?? 0.0)),
    );
  }

  num get invoiceAdds {
    return state.offlineInvoices.fold(
      0,
      (previous, invoice) =>
          previous +
          invoice.mobileDiscs.fold(
              0, (previous, addDiscs) => previous + (addDiscs.addValue ?? 0.0)),
    );
  }
}


/*
List<CartItem> cartItems = [];
          for (var billItem in billResponse.billItems) {
            final Item item =
                items.firstWhere((item) => item.guid == billItem.matGuid);
            num price = billItem.price;
            num addValue = billItem.extra;
            num addPercent = billItem.extra / (billItem.qty * billItem.price);
            num discValue = billItem.disc;
            num discPercent = billItem.disc / (billItem.qty * billItem.price);
            cartItems.add(
              CartItem(
                guid: billItem.guid,
                item: item,
                quantity: billItem.qty.toDouble(),
                note: billItem.notes,
                unitId: billItem.unitId,
                unitName: billItem.unitName,
                unitVal: billItem.unitVal,
                addTaxRate: billItem.addTaxRate,
                addValue: addValue,
                addPercent: addPercent,
                discountValue: discValue,
                discountPercent: discPercent,
                price: price,
                total: InvoicesHelper.calculateItemTotalPrice(
                  price: price,
                  quantity: billItem.qty.toDouble(),
                  addValue: addValue,
                  discountValue: discValue,
                  addTaxRate: billItem.addTaxRate,
                ),
              ),
            );
          }
          // final mainCartItem = MainCartItem(
          //   invoiceType: instance<SharedData>().invoiceType!,
          //   cartItems:cartItems,
          //   customerName:billResponse.bill.custName,
          //   customerPhone:billResponse.bill.phone,
          //   customerTaxNo:,
          //   personCompany:,
          //   person:,
          //   customerAccount:,
          //   oppositeAccount:,
          //   store:,
          //   cost:,
          //   employee:,
          //   paymentType:,
          //   invoiceNote:,
          //   addValue:,
          //   discValue:,
          //   addDiscAcc:,
          //   oppositeAddDiscAcc:,
          //   invoiceAddDiscs:,
          // );
*/

*/