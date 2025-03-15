<?php

namespace App\DTO;

use App\DTO\BaseDTO;

class UserDTO extends BaseDTO
{
    public string $email;
    public string $name;

    public function __construct(string $email, string $name)
    {
        $this->name = $name;
        $this->email = $email;
    }
}
