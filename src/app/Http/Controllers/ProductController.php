<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function __invoke()
    {
        return response()->json(['result' => Product::all()]);
    }
}
