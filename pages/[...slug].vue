<template>
  <main>
    <!-- FIND IF DOCUMENT EXIST IN CONTENT LANG FOLDER ( example /da/news )-->
    <ContentDoc>
      <template #empty>
        <SettingsError />
      </template>
      <!-- FIND IF DOCUMENT EXIST IN DEFAULT CONTENT LANG FOLDER ( example /default/news )-->
      <template #not-found>
        <ContentDoc :path="slug">
          <!-- REQUESTS ROUTE SLUG FOR DEFAULT LANG FOLDER -->
          <template #empty>
            <SettingsError />
          </template>
          <template #not-found>
            <ContentDoc path="/error">
              <!-- IF THIS DOES NOT EXIST RENDER THE ERROR CONTENT  ( example /error) -->
              <template #not-found>
                <SettingsError />
              </template>
            </ContentDoc>
          </template>
        </ContentDoc>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup>
const route = useRoute();

// Rendering the index content const slug = "/";
const slug = ref("/" + route.params.slug);
const { data } = await useAsyncData(`${route.params.slug}`, () =>
  queryContent(`${route.params.slug}`).findOne()
);
</script>
