<template>
    <div class="bg-base-200 flex flex-col gap-4 justify-center p-8">
        <div class="divider divider-primary m-0"></div>
        <div class="mx-auto breadcrumbs text-lg">
            <Breadcrumbs />
        </div>
        <!-- Alert for read more -->
        <div role="alert" class="alert ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="h-6 w-6 shrink-0 stroke-current">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>you might need to scroll horizontally to read the full text ;p</span>
        </div>
        <MockupCode />
    </div>
</template>