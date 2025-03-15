<?php

namespace App\DTO;

use App\DTO\BaseDTO;

class ProjectDTO extends BaseDTO
{
    public string $name;
    public string $description;

    public function __construct(string $name, string $description)
    {
        $this->name = $name;
        $this->description = $description;
    }
}
