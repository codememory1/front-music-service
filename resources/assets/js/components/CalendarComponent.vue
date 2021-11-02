<template>
  <div class="calendar">
    <div class="calendar__content">
      <div class="calendar__header">
        <div class="calendar__button calendar_button_header" @click="prev">
          <inline-svg src="public/images/icons/arrow-left.svg"/>
        </div>
        <div class="month">
          <span class="month__name">{{ months[displayedData.month - 1] }} {{ displayedData.year }}</span>
        </div>
        <div class="calendar__button calendar_button_header" @click="next">
          <inline-svg src="public/images/icons/arrow-right.svg"/>
        </div>
      </div>
      <div class="calendar__days-week">
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fri</span>
        <span>Sa</span>
        <span>Su</span>
      </div>
      <div class="calendar__days">
        <span class="disabled" v-for="_ in this.startedFromWeek"></span>
        <span
            v-for="day in date.getDate()"
            :class="{'active' : day === displayedData.day}"
            @click="datePicker"
        >{{ day }}</span>
      </div>
    </div>
    <div class="calendar__footer">
      <div class="calendar__button calendar_button_cancel" @click="cancel">Cancel</div>
      <div class="calendar__button calendar_button_done" @click="done">Done</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    activeYear: {
      type: Number,
      default: (new Date()).getFullYear(),
      required: false
    },
    activeMonth: {
      type: Number,
      default: (new Date()).getMonth() + 1,
      required: false
    },
    activeDay: {
      type: Number,
      default: (new Date()).getDate(),
      required: false
    }
  },
  data: () => ({
    date: null,
    months: [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ],
    displayedData: {
      year: null,
      month: null,
      day: null
    },
    startedFromWeek: 1
  }),
  created() {
    this.initDisplayedData();
    this.dateInit();

    this.startedFromWeek = this.definingDayOfWeek(1, this.displayedData.month, this.displayedData.year);
  },
  methods: {
    /**
     * Инициализация объекта Date
     */
    dateInit() {
      this.date = new Date(this.displayedData.year, this.displayedData.month, 0);
    },

    /**
     * Инициализация данных для отображения
     */
    initDisplayedData() {
      this.displayedData.year = this.activeYear;
      this.displayedData.month = this.activeMonth;
      this.displayedData.day = this.activeDay;
    },

    /**
     * Получение дня недели - 1
     * @param day
     * @param month
     * @param year
     * @returns {number}
     */
    definingDayOfWeek(day, month, year) {
      const date = new Date(year, month - 1, day);
      const dayOfWeek = date.getDay();

      if (dayOfWeek === 0) {
        return 6;
      }

      return dayOfWeek - 1;
    },

    /**
     * Обработка события при клике на число
     * @param event
     */
    datePicker(event) {
      this.displayedData.day = Number(event.target.textContent);

      this.$emit('datePicker');
    },

    /**
     * Обработка события при клике на стрелочку "prev"
     */
    prev() {
      if (this.displayedData.month <= 1) {
        this.displayedData.year--;
        this.displayedData.month = 12;
      } else {
        this.displayedData.month--;
      }

      this.genericSwipeHandler('prev');
    },

    /**
     * Обработка события при клике на стрелочку "next"
     */
    next() {
      if (this.displayedData.month >= 12) {
        this.displayedData.year++;
        this.displayedData.month = 1;
      } else {
        this.displayedData.month++;
      }

      this.genericSwipeHandler('next');
    },

    /**
     * Общий обработчик, при клике на prev или next
     * @param eventName
     */
    genericSwipeHandler(eventName) {
      this.dateInit();

      this.startedFromWeek = this.definingDayOfWeek(1, this.displayedData.month, this.displayedData.year);

      this.$emit(eventName);
    },

    /**
     * Обработчик события на кнопку done
     */
    done() {
      this.activeYear = this.displayedData.year;
      this.activeMonth = this.displayedData.month;
      this.activeDay = this.displayedData.day;

      this.$emit('done', this);
    },

    /**
     * Обработчик события на кнопку cancel
     */
    cancel() {
      this.$emit('cancel', this);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/components/calendar";
</style>