# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
#animations#
#TYPEWRITER 1#
TxtType = (el, toRotate, period) ->
  @toRotate = toRotate
  @el = el
  @loopNum = 0
  @period = parseInt(period, 10) or 2000
  @txt = ''
  @tick()
  @isDeleting = false
  return

TxtType::tick = ->
  i = @loopNum % @toRotate.length
  fullTxt = @toRotate[i]
  if @isDeleting
    @txt = fullTxt.substring(0, @txt.length - 1)
  else
    @txt = fullTxt.substring(0, @txt.length + 1)
  @el.innerHTML = '<h2 id="#wrap">' + @txt + '</h2>'
  that = this
  delta = 150 - (Math.random() * 100)
  if @isDeleting
    delta /= 2
  if !@isDeleting and @txt == fullTxt
    delta = @period
    @isDeleting = true
  else if @isDeleting and @txt == ''
    @isDeleting = false
    @loopNum++
    delta = 500
  setTimeout (->
    that.tick()
    return
  ), delta
  return

window.onload = ->
  elements = document.getElementsByClassName('typewrite')
  i = 0
  while i < elements.length
    toRotate = elements[i].getAttribute('data-type')
    period = elements[i].getAttribute('data-period')
    if toRotate
      new TxtType(elements[i], JSON.parse(toRotate), period)
    i++
  # INJECT CSS
  css = document.createElement('style')
  css.type = 'text/css'
  css.innerHTML = '.typewrite > #wrap,{ }'
  document.body.appendChild css
  return

#END TYPEWRITER 1#
#MAIN-CONTAINER TIMER#
setTimeout (->
  $('#hide').fadeIn()
  return
), 12000
#END MAIN-CONTAINER TIMER#
#TYPEWRITE HIDE#
setTimeout (->
  $('#hideafter').hide()
  return
), 12000
#END TYPEWRITE HIDE#
#code-drop
#end code drop
#end animations#
