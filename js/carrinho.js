(()=>{"use strict";$(document).ready((function(){jQuery(".quantity").each((function(){var n=jQuery(this),i=n.find('input[type="number"]'),t=n.find(".quantity-up"),a=n.find(".quantity-down"),e=i.attr("min"),r=i.attr("max");t.click((function(){var t=parseFloat(i.val());if(t>=r)var a=t;else a=t+1;n.find("input").val(a),n.find("input").trigger("change")})),a.click((function(){var t=parseFloat(i.val());if(t<=e)var a=t;else a=t-1;n.find("input").val(a),n.find("input").trigger("change")}))}))}))})();