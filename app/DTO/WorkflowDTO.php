<?php

namespace App\DTO;

use App\DTO\BaseDTO;

class WorkflowDTO extends BaseDTO
{
    public string $name;
    public string $description;
    public int $project_id;


    public function __construct(string $name, string $description, int $project_id)
    {
        $this->name = $name;
        $this->description = $description;
        $this->project_id = $project_id;
    }
}
