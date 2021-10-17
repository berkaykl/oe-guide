
local isOpened = false

RegisterCommand("guide", function()
  if not isOpened then
    SetNuiFocus(true, true)
    SendNUIMessage({
      action = "open"
    })
    isOpened = true
  else
    SetNuiFocus(false, false)
    SendNUIMessage({
      action = "close"
    })
    isOpened = false
  end
end)

RegisterNUICallback("exit" , function()
  SetNuiFocus(false, false)
  isOpened = false
end)
