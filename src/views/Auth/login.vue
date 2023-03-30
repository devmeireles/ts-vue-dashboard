<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card class="elevation-12">
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <v-text-field v-model="form.email" :rules="emailRules" label="Email" name="email" required></v-text-field>
              <v-text-field v-model="form.password" :rules="passwordRules" label="Password" name="password" required
                type="password"></v-text-field>
              <v-btn color="indigo" class="mt-4" :disabled="!isFormValid" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default defineComponent({
  setup() {
    const form = ref({
      email: '',
      password: ''
    });

    const rules = {
      email: { required, email },
      password: { required }
    };

    const v$ = useVuelidate(rules, form);

    const handleSubmit = () => {
      if (v$?.value.$invalid) {
        console.log('Form is invalid.');
        return;
      }

      // Perform login functionality with form.email and form.password
      // For example, send the data to a server-side script using Axios or fetch()
      console.log(`Email: ${form.value.email}, Password: ${form.value.password}`);
    };

    const emailRules = () => {
      return v$?.value.email?.$error ? ['Please enter a valid email address'] : [];
    };

    const passwordRules = () => {
      return v$?.value.password?.$error ? ['Password is required'] : [];
    };

    const isFormValid = () => {
      return v$?.value.$invalid === false;
    };

    return {
      form,
      emailRules,
      passwordRules,
      isFormValid,
      handleSubmit
    };
  }
});
</script>

<style>
.v-input__control,
.v-input--selection-controls__input,
.v-label {
  font-size: 16px;
}
</style>
