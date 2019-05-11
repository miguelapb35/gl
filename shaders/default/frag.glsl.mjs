export default "varying vec3 vnormal;\n\nvoid main () {\n\tvec3 lighting = vec3(0.0, 0.0, 0.0);\n\n\t// directional lights\n\tfor (int i = 0; i < 8; i += 1) {\n\t\tDirectionalLight light = DIRECTIONAL_LIGHTS[i];\n\n\t\tfloat multiplier = clamp(dot(vnormal, -light.direction), 0.0, 1.0);\n\t\tlighting += multiplier * light.color.rgb * light.intensity;\n\t}\n\n\t// point lights\n\tfor (int i = 0; i < 8; i += 1) {\n\t\tvec3 direction = POINT_LIGHTS_LOCATION[i];\n\t\tvec4 color = POINT_LIGHTS_COLOR[i];\n\n\t\tfloat multiplier = clamp(dot(vnormal, direction), 0.0, 1.0);\n\t\tlighting += multiplier * color.rgb * color.a;\n\t}\n\n\tgl_FragColor = vec4(COLOR, 1.0);\n\tgl_FragColor.rgb *= mix(AMBIENT_LIGHT, vec3(1.0, 1.0, 1.0), lighting);\n}";