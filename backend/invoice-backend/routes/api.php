<?php
// filepath: /routes/api.php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\ItemController;

Route::apiResource('invoices', InvoiceController::class);
Route::post('items', [ItemController::class, 'store']);
Route::delete('items/{id}', [ItemController::class, 'destroy']);