<template>
  <modal ref="modal" :class="'modal-auth'">
    <h3 class="modal__title">Sign In</h3>
    <div class="methods-auth">
      <div class="method-auth apple">
        <i class="fab fa-apple"></i>
      </div>
      <div class="method-auth google">
        <i class="fab fa-google"></i>
      </div>
      <div class="method-auth facebook">
        <i class="fab fa-facebook-f"></i>
      </div>
    </div>
    <form class="form" @submit.prevent>
      <div class="form__field" :class="{ active: !isEmpty(username) }">
        <label for="username">Email | Username</label>
        <input
          type="text"
          name="username"
          id="username"
          @input="username = $event.target.value"
          :value="username"
        />
        <i class="fas fa-user"></i>
      </div>
      <div class="form__field" :class="{ active: !isEmpty(password) }">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          @input="password = $event.target.value"
        />
        <i class="fas fa-key"></i>
      </div>
      <div class="remember-data__wrap">
        <input
          type="checkbox"
          class="checkbox"
          id="remember-data"
          v-model="remember"
        />
        <label for="remember-data">Remember on this device</label>
      </div>
      <div class="login-button__wrap">
        <base-button
          :value="'Sign in to your account'"
          :class="'login_button'"
          @click="signIn"
        />
      </div>
      <div class="text-after-button">
        <p>
          Don't have an account?
          <a href="#">Create an account</a>
        </p>
        <p>
          Forgot your password?
          <a href="#">Restore password</a>
        </p>
      </div>
    </form>
  </modal>
</template>
<script>
import Modal from "./BaseModalComponent";
import BaseButton from "../../components/BaseButton";

export default {
  name: "AuthModal",
  components: {
    Modal,
    BaseButton,
  },
  data: () => ({
    username: null,
    password: null,
    remember: false,
  }),
  created() {
    this.username = this.$storage.getByKey("auth_data", "username");
  },
  methods: {
    open() {
      this.$refs.modal.open();
    },

    signIn() {
      if (this.remember) {
        this.$storage.create("auth_data", {
          username: this.username,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";

.modal__title {
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.methods-auth {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  margin-left: 80px;
  margin-right: 80px;
  margin-bottom: 30px;
}

.method-auth {
  width: 47px;
  height: 47px;
  background-color: $dark-bg;
  margin-right: 25px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:last-of-type {
    margin-right: 0;
  }

  &.apple {
    i {
      font-size: 25px;
    }
  }

  &.facebook {
    i {
      font-size: 21px;
    }
  }

  i {
    color: $accent;
    font-size: 19px;
  }

  &:hover {
    background-color: lighten($dark-bg, 10%);
  }
}

.form {
  padding: 0 80px;
}

.form__field {
  position: relative;
  width: 100%;
  height: 50px;
  border: 1px solid $accent;
  border-radius: 10px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }

  > label {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 15px;
    color: #999;
    pointer-events: none;
    background-color: $abs-light-bg;
    transition: all 0.3s ease-in-out;
    padding: 3px 7px;
  }

  input {
    width: inherit;
    height: inherit;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 15px;
    padding: 0 45px 0 15px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #fff !important;
    }
  }

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: lighten($abs-light-bg, 10%);
    right: 10px;
  }

  &.active {
    label {
      font-size: 14px;
      transform: translateY(-160%);
      color: #fff;
    }
  }
}
.form__field:focus-within {
  > label {
    font-size: 14px;
    transform: translateY(-160%);
    color: #fff;
  }
}

::v-deep .modal__container {
  height: max-content;
}

.remember-data__wrap {
  display: flex;
  cursor: pointer;
  margin-bottom: 40px;
  align-items: center;

  label {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
    margin-top: 2px;
    align-items: center;
  }
}

.login-button__wrap {
  display: flex;
  justify-content: center;
  padding-bottom: 45px;
}

.login_button {
  border-radius: 60px;
}

.text-after-button {
  margin-top: 30px;
  margin-bottom: 55px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    margin: 7px 0;

    a {
      color: $accent;
    }
  }
}
</style>
