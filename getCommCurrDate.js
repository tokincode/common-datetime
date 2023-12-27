Date.prototype.getCommCurrDate = function() {
    function pad(inputVal, {sign=false, len=2} = {}) {
        const signWithNumber = /^(-?)(\d*)/.exec(inputVal);
        return `${sign?signWithNumber[1]||'+':''}${'0'.repeat(len-signWithNumber[2].length)}${signWithNumber[2]}`;
    }
    function getCommTimeOffset() {
        const numOffset = this.getTimezoneOffset();
        if(typeof numOffset != "number") return "";
        const preHours = numOffset/-60;
        const preMinutes = Math.abs(preHours%1*60);
        return `${pad(preHours,{sign:true})}${preMinutes||'00'}`;
    }
    return `${this.getFullYear()}-${pad(this.getMonth()+1)}-${pad(this.getDate())} ${pad(this.getHours())}:${pad(this.getMinutes())}:${pad(this.getSeconds())}.${pad(this.getMilliseconds(),{len:3})} GMT${getCommTimeOffset.apply(this)}`;
}
