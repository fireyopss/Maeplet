<?php

namespace App\DTO;

use App\DTO\BaseDTO;

class WorkflowDTO extends BaseDTO
{
    public string $name;
    public string $description;
    public int $user_id;


    public function __construct(string $name, string $description, int $user_id)
    {
        $this->name = $name;
        $this->description = $description;
        $this->user_id = $user_id;
    }
}
