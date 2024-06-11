<template>
  <div class="px-6">
    <h1 class="text-black text-4xl max-w-4xl mx-auto my-6 dark:text-white">
      Nostr
    </h1>

    <AdminSubsettings />

    <form class="max-w-4xl mx-auto mt-12">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2
            class="text-base font-semibold leading-7 text-gray-900 dark:text-white"
          >
            Settings
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
            A bit more wild stuff here you can generate a nsec npub combo or set
            a pubkey, from this pubkey your notes will be pulled in . Enable
            Relay Content pulls in your blog notes from a nostr Enable Product
            List pulls in your products from nostr. Set Relay to pull & publish
            to so when writing content you can also publish to the relay
            directly
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Status
              </label>
              <div class="flex">
                <span class="relative flex mx-2 my-auto h-3 w-3">
                  <span class="animate-ping delay-300 absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span class="flex-initial">
                  {{ nostrConnectStatus }}
                </span>
              </div>
            </div>
            <div class="sm:col-span-4">
              <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Admin npub
              </label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="data.nostradmin"
                  />
                </div>
                <div class="mt-2" v-if="nostrProfile">
                  Name: {{ nostrProfile.name }}
                  <br />
                  Display name: {{ nostrProfile.displayName }}
                  <br />
                  About
                  <br />
                  <small>{{ nostrProfile.about }}</small>
                  <br />
                  Website: {{ nostrProfile.website }}
                  <br />
                  NIP-05: {{ nostrProfile.nip05 }}
                  <br />
                  LUD-16: {{ nostrProfile.lud16 }}
                  <br />
                </div>
              </div>
            </div>
            <div class="sm:col-span-4">
              <label class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Conntected relays
              </label>
              <div class="mt-2"  v-for="(relay) in data.nostrrelays">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 text-gray-900 dark:text-white"
                    :placeholder="relay"
                  />
                </div>
              </div>
              <div class="mt-4 text-xs">
                These relays are configured in <code>config/setup.json</code>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 space-y-10">
            <fieldset>
              <legend
                class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Enable Fetch over Nostr
              </legend>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Notes</label
                    >
                    <!-- <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p> -->
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div class="text-sm leading-6">
                    <label class="font-medium text-gray-900 dark:text-white"
                      >Products</label
                    >
                    <!-- <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p> -->
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>


    <AdminFooter />


  </div>
</template>

<script setup>
import data from "~/config/setup"
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid"
import { useNdkStore } from '~/store/Ndk'

const NdkStore = useNdkStore()
const nostrConnectStatus = ref()
const nostrProfile = ref()
nostrConnectStatus.value = "Not connected"

/**
 * Init.
 */
onMounted(async () => {
  try {
    NdkStore.setExplicitRelays(data.nostrrelays)
    await NdkStore.initNdk()
    nostrConnectStatus.value = "NDK initialized"
    await NdkStore.connect()
    nostrConnectStatus.value = "Connected"
    if (NdkStore.connected) {
      await fetchProfile()
    }
  } catch (e) {
    console.log(e)
  }
})

/**
 * Fetch Nostr profile of connected npub.
 * @returns {Promise<void>}
 */
const fetchProfile = async() => {
  const u = NdkStore.ndk.getUser({
    npub: data.nostradmin
  })
  nostrProfile.value = await u.fetchProfile()
}

definePageMeta({
  layout: "admin",
})
</script>
