resource "azurerm_container_registry" "flixtube" {
  name = var.app_name
  resource_group_name = azurerm_resource_group.flixtube.name
  location = var.location
  admin_enabled = true
  sku = "Basic"
}

#output "registry_hostname" {
#  value = azurerm_container_registry.flixtube.login_server
#}

#output "registry_un" {
#  value = azurerm_container_registry.flixtube.admin_username
#}

#output "registry_pw" {
#  value = azurerm_container_registry.flixtube.admin_password
#  sensitive = true
#}
