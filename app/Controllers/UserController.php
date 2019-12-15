<?php

namespace App\Controllers;

use App\Models\User;

class UserController
{

    public function create($request)
    {

        $attributes = json_decode(file_get_contents("php://input"), TRUE);
        $user = new User();
        foreach ($attributes as $key => $attribute):
            $user->$key = $attribute;
            if ($key === 'password') {
                $user->$key = md5($attribute);
            }
        endforeach;
        if ($user->save()) {
            return true;
        }
        return false;
    }

    public function hasEmail ($email)
    {
        if (User::where('email', $email)->first()) {
            return true;
        }
        return false;
    }

    public function email($request)
    {
        $attributes = json_decode(file_get_contents("php://input"), TRUE);
        return $this->hasEmail($attributes['email']);
    }

    public function login($request)
    {
        $attributes = json_decode(file_get_contents("php://input"), TRUE);
        $user = User::where('email', $attributes['email'])
            ->where('password', md5($attributes['password']))
            ->first();
        if ($user) {
            return true;
        }
        return false;
    }
}
