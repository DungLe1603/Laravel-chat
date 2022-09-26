<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use \App\User;

class Message extends Model
{
    protected $fillable = ['message', 'user_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
