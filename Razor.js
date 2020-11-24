<script>
function ConvertRazorToDate(date) {
        if (date != null) {
            var value = new Date(parseInt(date.substr(6)))
            var d = value.getDate();
            var m = value.getMonth() + 1;
            var y = value.getFullYear();
            if (d < 10) {
                d = '0' + d;
            }
            if (m < 10) {
                m = '0' + m;
            }
            return d + '/' + m + '/' + y;
        }
        else {
            return '';
        }
    }
</script>
