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
        Schema::create('solves', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->cascadeOnUpdate()
                ->cascadeOnDelete()
                ->constrained('users');
            $table->string('scramble');
            $table->integer('time');
            $table->string('time_formatted');
            $table->integer('average_of_5')->nullable();
            $table->string('average_of_5_formatted')->nullable();
            $table->integer('average_of_12')->nullable();
            $table->string('average_of_12_formatted')->nullable();
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
        Schema::dropIfExists('solves');
    }
};
