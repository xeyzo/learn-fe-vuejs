<template>
  <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-8 w-96">
      <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
      <form>
        <!-- Email Input -->
        <div class="mb-4">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <font-awesome-icon icon="envelope" class="text-gray-400 h-4 w-4" />
            </span>
            <input
              type="email"
              id="email"
              class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <font-awesome-icon icon="lock" class="text-gray-400 h-4 w-4" />
            </span>
            <input
              type="password"
              id="password"
              class="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center justify-center"
        >
        <div class="pr-2">
            Login
        </div>
        <font-awesome-icon icon="arrow-right" class="text-white h-4 w-4" />
        </button>
      </form>
    </div>
  </div>
</template>