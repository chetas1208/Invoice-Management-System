<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index()
    {
        return Invoice::with('items')->get();
    }

    public function store(Request $request)
    {
        $invoice = Invoice::create($request->all());
        return response()->json($invoice, 201);
    }

    public function show($id)
    {
        return Invoice::with('items')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $invoice = Invoice::findOrFail($id);
        $invoice->update($request->all());
        return response()->json($invoice, 200);
    }

    public function destroy($id)
    {
        Invoice::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}