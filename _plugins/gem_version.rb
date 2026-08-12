require "net/http"
require "json"
require "uri"

module GemVersion
  def gem_version(name)
    uri = URI("https://rubygems.org/api/v1/versions/#{URI.encode_www_form_component(name)}/latest.json")

    response = Net::HTTP.get_response(uri)

    return nil unless response.is_a?(Net::HTTPSuccess)

    JSON.parse(response.body)["version"]
  rescue StandardError => e
    Jekyll.logger.warn("Gem Version:", "No se pudo obtener #{name}: #{e.message}")
    nil
  end
end

Liquid::Template.register_filter(GemVersion)
