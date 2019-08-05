<template>
  <v-navigation-drawer
    fixed
    app
    absolute
    permanent
  >
    <v-toolbar flat>
      <v-list dense>
        <v-list-tile to="/" class="home">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/details" class="personal_information">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>基本情報</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/skills" class="skills">
          <v-list-tile-action>
            <v-icon>computer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>スキル</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/employment" class="company_employment">
          <v-list-tile-action>
            <v-icon>business</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>職務経歴</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/preview" class="preview">
          <v-list-tile-action>
            <v-icon>print</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>プレビュー</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
  </v-navigation-drawer>
</template>
