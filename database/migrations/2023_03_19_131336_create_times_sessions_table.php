<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('times_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete()
                ->constrained('users');
            $table->longText('times_history');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('times_sessions');
    }
};
