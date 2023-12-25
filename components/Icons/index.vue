<template>
  <div>
    <DeHtml5Original v-if="title === 'html'" />
    <DeCss3Original v-if="title === 'css'" />
    <DeJavascriptOriginal v-if="title === 'js'" />
    <DeTailwindcssPlain v-if="title === 'tailwind'" />
    <DeVuejsOriginal v-if="title === 'vue'" />
    <DeReactOriginal v-if="title === 'react'" />
    <DeSassOriginal v-if="title === 'sass'" />
    <DeNuxtjsOriginal v-if="title === 'nuxt'" />
    <DeTypescriptOriginal v-if="title === 'ts'" />
    <DeNodejsOriginal v-if="title === 'node'" />
    <SiExpress v-if="title === 'express'" />
    <DeMongodbOriginal v-if="title === 'mongodb'" />
    <SiLaravel v-if="title === 'laravel'" />
    <DeFigmaOriginal v-if="title === 'figma'" />
    <DeVuetifyOriginal v-if="title === 'vuetify'" />
    <AkGithubFill v-if="title === 'github'" />
    <DeGitOriginal v-if="title === 'git'" />
    <DeGitlabOriginal v-if="title === 'gitlab'" />
    <ChGitlab v-if="title === 'gitlab-outlined'" />
    <DeVscodeOriginal v-if="title === 'vscode'" />
    <AkWhatsappFill v-if="title === 'whatsapp'" />
    <AkInstagramFill v-if="title === 'instagram'" />
    <FeTwitter v-if="title === 'twitter'" />
    <AkLinkedinV2Fill v-if="title === 'linkedin'" />
    <BsFolder v-if="title === 'folder'" />
    <AkNextjsFill v-if="title === 'next'" />
    <VsFileTypeLightNetlify v-if="title === 'netlify'" />
    <DeBootstrapPlain v-if="title === 'bootstrap'" />
    <SiSublimetext v-if="title === 'sublime'" />
    <DeMaterialuiOriginal v-if="title === 'materialui'" />
    <AkEdit v-if="title === 'edit'" />
    <ClMenuAlt01 v-if="title === 'menu'" />
    <IoOutlineClose v-if="title === 'close'" />
    <SiVercel v-if="title === 'vercel'" />
    <!-- <IconsPinia v-if="title === 'pinia'" /> -->
    <!-- 
    <AkNextjsFill v-if="title === 'next'" />
    <AkNextjsFill v-if="title === 'next'" />
     
    -->
  </div>
</template>

<script setup lang="ts">
  import {
    DeHtml5Original,
    DeCss3Original,
    DeJavascriptOriginal,
    DeTailwindcssPlain,
    DeVuejsOriginal,
    DeReactOriginal,
    DeSassOriginal,
    DeNuxtjsOriginal,
    DeTypescriptOriginal,
    DeNodejsOriginal,
    SiExpress,
    DeMongodbOriginal,
    CoBrandSocketIo,
    VsFileTypeFirebase,
    DeXdPlain,
    DePhpOriginal,
    SiLaravel,
    DeFigmaOriginal,
    DeVuetifyOriginal,
    AkGithubFill,
    DeGitOriginal,
    DeGitlabOriginal,
    DeVscodeOriginal,
    AkWhatsappFill,
    AkInstagramFill,
    ChGitlab,
    AkLinkedinV2Fill,
    FeTwitter,
    BsFolder,
    AkNextjsFill,
    VsFileTypeLightNetlify,
    DeBootstrapPlain,
    SiSublimetext,
    DeMaterialuiOriginal,
    AkEdit,
    ClMenuAlt01,
    IoOutlineClose,
    SiVercel,
  } from "@kalimahapps/vue-icons"
  const props = defineProps({
    title: {
      type: String,
      default: "",
    },
  })
</script>
