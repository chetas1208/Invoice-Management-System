<?php
// filepath: /database/migrations/xxxx_xx_xx_create_items_table.php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invoice_id')->constrained()->onDelete('cascade')->index(); // Add index
            $table->string('name')->index(); // Add index
            $table->decimal('price', 8, 2)->index(); // Add index
            $table->integer('quantity')->index(); // Add index
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('items');
    }
}