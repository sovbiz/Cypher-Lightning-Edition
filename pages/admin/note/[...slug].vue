<template>
  <div>

    <div >

      <h1 class="text-black text-4xl max-w-2xl mx-auto my-6 dark:text-white">Add/Edit Notes</h1>

      
  <form class="max-w-2xl mx-auto">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">





        <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white">Write a new note or edit an existing one</h2>


        <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Delete</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      <button type="submit" class="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Publish to Nostr</button>

   
    </div>



        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-6">
            <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Title</label>
            <div class="mt-2">
              <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900" />
            </div>
          </div>


          <div class="sm:col-span-2">
            <label  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Status</label>
            <div class="mt-2">
              <select  class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-gray-900 dark:text-gray-900">
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Featured</label>
            <div class="mt-2">
              <select  class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-gray-900 dark:text-gray-900">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>


          <div class="sm:col-span-2">
            <label  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Freedom</label>
            <div class="mt-2">
              <select  class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs text-gray-900 dark:text-gray-900">
                <option>Free</option>
                <option>Donate</option>
                <option>Paywall</option>

              </select>
            </div>
          </div>


          <div class="sm:col-span-2">
            <label  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Category Title</label>
            <div class="mt-2">
              <input type="text"  class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900" />
            </div>
          </div>



          <div class="sm:col-span-2">
            <label  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Publish Date</label>
            <div class="mt-2">
              <input type="date"  class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900" />
            </div>
          </div>



          <div class="sm:col-span-2">
            <label  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Route </label>
            <div class="mt-2">
              <input type="text" placeholder="/route" class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900" />
            </div>
          </div>



          <div class="col-span-full">
            <label  class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Npub Author</label>
            <div class="mt-2">
              <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900" />
            </div>
          </div>




          <div class="col-span-full">
            <label for="photo" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Upload Cover Image</label>
            <div class="mt-2 flex items-center gap-x-3">
              <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
              <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Upload</button>
            </div>
          </div>







        </div>
      </div>











        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



          <span class="isolate inline-flex rounded-md shadow-sm">
    <button type="button" class="relative inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
      <PencilSquareIcon class="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
      Text
    </button>
    <button type="button" class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
      <EyeIcon class="mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />

      Preview </button>
  </span>

          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Markdown Note </label>
            <div class="mt-2">
              <textarea id="about" name="about" rows="25" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 dark:text-gray-900" />
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600 dark:text-white"></p>
          </div>




        </div>
      </div>




    </div>


  </form>





    </div>
  </div>
</template>
<script setup>

import { PencilSquareIcon,EyeIcon } from '@heroicons/vue/20/solid'

import data from "~/config/setup";

definePageMeta({
  layout: 'admin'
})
</script>
