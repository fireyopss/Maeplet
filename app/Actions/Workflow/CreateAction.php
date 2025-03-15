<?php

namespace App\Actions\Workflow;

use App\DTO\WorkflowDTO;
use App\Models\Workflow;

class CreateAction {

    public function execute(WorkflowDTO $dto): Workflow
    {
        return Workflow::create(array_merge($dto->toArray(), ['user_id' => auth()->id()]));
    }

}