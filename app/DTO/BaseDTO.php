<?php

namespace App\DTO;

class BaseDTO
{
    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
