let multiRoute, referencePoints;
function init() {
    let e = new ymaps.multiRouter.MultiRouteModel([]);
    multiRoute = new ymaps.multiRouter.MultiRoute(e,{
        boundsAutoApply: !0
    }),
    ymaps.modules.require(["MultiRouteCustomView"], function(t) {
        new t(e)
    });
    let t = new ymaps.Map("map",{
        center: [38.576271, 68.779716],
        zoom: 12,
        controls: ["zoomControl"]
    });
    t.behaviors.disable("scrollZoom"),
    t.geoObjects.add(multiRoute),
    multiRoute.events.add("boundschange", function() {
        t.setBounds(multiRoute.getBounds(), {
            checkZoomRange: !0
        })
    })
}
$(document).ready(function() {
    let e = $("#marshruty");
    e.on("click", ".dobavit-tranzitnyj-punkt", function() {
        $($("#tranzitnyj-punkt").html()).insertAfter($(this).closest(".form-group"))
    }).on("click", ".udalit-tranzitnyj-punkt", function() {
        $(this).closest(".form-group").remove()
    }).on("keyup", ".tochka", function() {
        let e = []
          , t = $(this).val();
        t.length && $.getJSON("https://geocode-maps.yandex.ru/1.x/?apikey=" + "2ae0f67d-dbae-475d-917f-175f65db73c1" + "&format=json&callback=?&geocode=" + t, function(t) {
            for (let s = 0; s < t.response.GeoObjectCollection.featureMember.length; s++) {
                let o = t.response.GeoObjectCollection.featureMember[s].GeoObject.name
                  , n = t.response.GeoObjectCollection.featureMember[s].GeoObject.description;
                e.push({
                    label: o + (n ? ", " + n : ""),
                    longlat: t.response.GeoObjectCollection.featureMember[s].GeoObject.Point.pos
                })
            }
            $(".tochka").autocomplete({
                source: e,
                select: function(e, t) {
                    $(this).prev().val(t.item.longlat)
                },
                open: function(e, t) {
                    $(this).prev().val("")
                }
            })
        })
    }).on("click", ".rasschitat", function() {
        referencePoints = [],
        $('input[name="tochki[]"]', e).each(function() {
            if ($(this).val().length) {
                let e = $(this).val().split(" ");
                referencePoints.push([e[1], e[0]])
            }
        }),
        referencePoints.length == $('input[name="tochki[]"]', e).length ? multiRoute.model.setReferencePoints(referencePoints) : ($("#errors").remove(),
        $('<div id="errors" class="alert alert-danger fade show"><div class="alert-icon"><i class="flaticon-warning"></i></div><div class="alert-text kt-font-bold">Укажите пункт(ы) маршрута</div><div class="alert-close"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true"><i class="la la-close"></i></span></button></div></div>').insertBefore(e))
    })
}),
ymaps.modules.define("MultiRouteCustomView", ["util.defineClass"], function(e, t) {
    function s(e) {
        this.multiRouteModel = e,
        this.state = "init",
        this.stateChangeEvent = null,
        this.outputElement = $('<div class="kt-portlet__body"></div>').appendTo("#rezultat-raschjota"),
        this.rebuildOutput(),
        e.events.add(["requestsuccess", "requestfail", "requestsend"], this.onModelStateChange, this)
    }
    s.stateProcessors = {
        init: "processInit",
        requestsend: "processRequestSend",
        requestsuccess: "processSuccessRequest",
        requestfail: "processFailRequest"
    },
    s.routeProcessors = {
        driving: "processDrivingRoute"
    },
    t(s, {
        onModelStateChange: function(e) {
            this.state = e.get("type"),
            this.stateChangeEvent = e,
            this.rebuildOutput()
        },
        rebuildOutput: function() {
            let e = s.stateProcessors[this.state];
            this.outputElement.html(this[e](this.multiRouteModel, this.stateChangeEvent))
        },
        processInit: function() {},
        processRequestSend: function() {
            return $("#rezultat-raschjota").removeClass("kt-hidden"),
            '<span class="kt-font-dark">Расчет расстояний ...</span>'
        },
        processSuccessRequest: function(e, t) {
            var s = e.getRoutes()
              , o = $("<div></div>");
            if (s.length) {
                o.append('<span class="">Всего маршрутов: <span class="kt-font-dark kt-font-bold">' + s.length + "</span></span>");
                for (var n = 0, i = s.length; n < i; n++)
                    o.append(this.processRoute(n, s[n]))
            } else
                o.append("<em>Нет маршрутов.</em>");
            return o.html()
        },
        processFailRequest: function(e, t) {
            return t.get("error").message
        },
        processRoute: function(e, t) {
            return '<div class="mt-3">' + this[s.routeProcessors[t.properties.get("type")]](e, t) + "</div>"
        },
        processDrivingRoute: function(e, t) {
            let s = $("<div></div>");
            return s.append('<span class="kt-font-bold kt-font-primary">' + (e + 1) + " Автомобильный маршрут.</span>"),
            s.append('<span class="d-block">Протяженность маршрута: <span class="kt-font-dark">' + t.properties.get("distance").text + '</span></span><span class="d-block">Время в пути: <span class="kt-font-dark">' + t.properties.get("duration").text + "</span></span>"),
            s.html()
        },
        destroy: function() {
            this.outputElement.remove(),
            this.multiRouteModel.events.remove(["requestsuccess", "requestfail", "requestsend"], this.onModelStateChange, this)
        }
    }),
    e(s)
}),
ymaps.ready(init);
