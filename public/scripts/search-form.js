import { renderBlock } from './lib.js';
const TwoDays_Month = 2;
const OneMonth = 1;
function getStringFromDate(date) {
    return date.getFullYear() + '-' + (date.getMonth() + OneMonth).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
}
const getDateFromString = (date) => new Date(+date.split('-')[0], +date.split('-')[1], +date.split('-')[2]);
const minDate = new Date();
const maxDate = new Date(minDate.getFullYear(), minDate.getMonth() + OneMonth, (new Date(minDate.getFullYear(), minDate.getMonth() + 2, 0)).getDate());
const minCheckoutDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate() + TwoDays_Month);
export function renderSearchFormBlock(dateStart = getStringFromDate(minDate), dateEnd = getStringFromDate(minCheckoutDate)) {
    const dateStartFromString = getDateFromString(dateStart);
    const dateEndFromString = getDateFromString(dateEnd);
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateStartFromString >= minDate ? dateStart : getStringFromDate(minDate)}" 
            min="${getStringFromDate(minDate)}" 
            max="${getStringFromDate(maxDate)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateEndFromString <= maxDate ? dateEnd : getStringFromDate(maxDate)}" 
            min="${getStringFromDate(minCheckoutDate)}" 
            max="${getStringFromDate(maxDate)}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
    document.querySelector('form#searchForm').addEventListener('submit', getSearchFormData);
}
function getSearchFormData(e) {
    e.preventDefault();
    const form = new FormData(document.querySelector('form#searchForm'));
    const formValues = {
        city: '',
        coordinates: [],
        checkInDate: '',
        checkOutDate: '',
        maxPrice: ''
    };
    const searchFormData = {
        'city': '',
        'coordinates': [],
        'check-in-date': '',
        'check-out-date': '',
        'max-price': ''
    };
}
