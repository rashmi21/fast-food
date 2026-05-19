export const resDetails = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Domino's Pizza",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262278",
                              name: "Sourdough Garlic Bread",
                              category: "Sourdough Range",
                              description:
                                "Golden sourdough baked with garlic butter and herbs. Crisp outside, fluffy inside.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/3/28/80df1fc4-99d0-4eab-a097-148a76f6861e_47b7f36d-c375-4a45-9231-62ba1647c8dd.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113249050",
                              menuFilterIds: ["VEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "21900",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262246",
                              name: "Sourdough Classic Veg Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "A rich medley of 4 cheeses on classic airy sourdough crust. Airy, cheesy and utterly satisfying. *Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/8/da86eec5-0c04-44c0-9958-bd8cfc610b98_8308debf-4e77-4291-ad5c-c5865ff59965.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181385",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782928",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181386",
                                          variationId: "204782929",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181386",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782929",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181385",
                                        variationId: "204782928",
                                      },
                                      {
                                        groupId: "68181386",
                                        variationId: "204782929",
                                      },
                                    ],
                                    price: 36900,
                                    finalPrice: { units: "369" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 36900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387342",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262254",
                              name: "Sourdough Classic Truffle Veg Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Velvety truffle mushroom sauce, golden 4-cheeses on airy sourdough. Creamy, earthy, indulgent.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/b27c5696-fa26-47dc-9d75-c1761085e275_2a99aa9f-d33f-4b9c-93ba-c8a0053601ef.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181400",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782943",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181402",
                                          variationId: "204782945",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181402",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782945",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181400",
                                        variationId: "204782943",
                                      },
                                      {
                                        groupId: "68181402",
                                        variationId: "204782945",
                                      },
                                    ],
                                    price: 36900,
                                    finalPrice: { units: "369" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 36900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387341",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262270",
                              name: "Sourdough Creamy Truffle Mushroom Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Creamy truffle sauce, mushrooms and jalapeños with 4-cheeses on airy sourdough crust.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/8ad9aaf9-7e5f-4793-9b4b-43a5d825ceec_1cd67f13-65e8-4a9d-8471-06b22819de95.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181429",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782972",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181430",
                                          variationId: "204782973",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181430",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782973",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181429",
                                        variationId: "204782972",
                                      },
                                      {
                                        groupId: "68181430",
                                        variationId: "204782973",
                                      },
                                    ],
                                    price: 41900,
                                    finalPrice: { units: "419" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387344",
                              menuFilterIds: ["VEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262274",
                              name: "Sourdough Pesto Veggie Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Grilled red & yellow bell peppers, olives and a basil pesto drizzle over classic sourdough topped with 4-cheeses.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/0d42cb15-444f-48a7-954f-862f010dede4_b5a7c398-d91c-4301-b9d8-1419eb737514.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181437",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782980",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181438",
                                          variationId: "204782981",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181438",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782981",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181437",
                                        variationId: "204782980",
                                      },
                                      {
                                        groupId: "68181438",
                                        variationId: "204782981",
                                      },
                                    ],
                                    price: 41900,
                                    finalPrice: { units: "419" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387348",
                              menuFilterIds: ["VEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262268",
                              name: "Sourdough Classic Truffle Pepperoni Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Succulent chicken pepperoni, truffle mushroom sauce and molten 4-cheeses on airy sourdough. Bold, smoky, irresistible.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/7821e3f9-ae75-4ec6-ba63-bae702a8bb73_86178eef-4b3b-4373-a07c-44a7f7bfa7df.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181425",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782968",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181426",
                                          variationId: "204782969",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181426",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782969",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181425",
                                        variationId: "204782968",
                                      },
                                      {
                                        groupId: "68181426",
                                        variationId: "204782969",
                                      },
                                    ],
                                    price: 41900,
                                    finalPrice: { units: "419" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387340",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262263",
                              name: "Sourdough Chicken Pepperoni Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Chicken pepperoni and 4 cheeses on airy sourdough. Savoury, smoky, an absolute delight.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/7821e3f9-ae75-4ec6-ba63-bae702a8bb73_86178eef-4b3b-4373-a07c-44a7f7bfa7df.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181414",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782957",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181416",
                                          variationId: "204782959",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181416",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782959",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181414",
                                        variationId: "204782957",
                                      },
                                      {
                                        groupId: "68181416",
                                        variationId: "204782959",
                                      },
                                    ],
                                    price: 41900,
                                    finalPrice: { units: "419" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387339",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262236",
                              name: "Sourdough Pesto Chicken Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Grilled chicken rashers, olives and a touch of basil pesto over 4-cheeses on airy sourdough. Pure delight.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/c76ec569-9678-4e6d-862c-c2a0af139c66_b49bc4a1-7c1c-418f-a3b6-ce63a4ba11c3.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181364",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782907",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181366",
                                          variationId: "204782909",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181366",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782909",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181364",
                                        variationId: "204782907",
                                      },
                                      {
                                        groupId: "68181366",
                                        variationId: "204782909",
                                      },
                                    ],
                                    price: 46900,
                                    finalPrice: { units: "469" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 46900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387347",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262241",
                              name: "Sourdough Creamy Truffle Chicken Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Creamy truffle mushroom sauce, grilled chicken rashers and jalapeños over 4-cheeses on airy sourdough. Earthy, rich, indulgent.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/70fd2b37-e413-4efa-a6fc-28bb6c97c2c8_1abe61d0-b12e-4906-bec7-75e7aa808326.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181375",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782918",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181376",
                                          variationId: "204782919",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181376",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782919",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181375",
                                        variationId: "204782918",
                                      },
                                      {
                                        groupId: "68181376",
                                        variationId: "204782919",
                                      },
                                    ],
                                    price: 46900,
                                    finalPrice: { units: "469" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 46900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387343",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262256",
                              name: "Sourdough Slim Classic Veg Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Four rich cheeses on a crisp slim sourdough crust. Light, cheesy and perfectly satisfying.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/12313890-b30e-4fcc-9fb6-7f84d5583fef_afb7be1b-44b2-4bb7-9fa3-29beb2650ba7.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181405",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782948",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181406",
                                          variationId: "204782949",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181406",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782949",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181405",
                                        variationId: "204782948",
                                      },
                                      {
                                        groupId: "68181406",
                                        variationId: "204782949",
                                      },
                                    ],
                                    price: 56900,
                                    finalPrice: { units: "569" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 56900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387352",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262251",
                              name: "Sourdough Slim Classic Truffle Veg Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Velvety truffle mushroom sauce, 4-cheeses and veg pepperoni bites on slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/c101a6a7-4095-48e9-b384-eb805dfef8ff_bb9cd20a-16a8-4535-88f1-f4e694325041.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181395",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782938",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181396",
                                          variationId: "204782939",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181396",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782939",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181395",
                                        variationId: "204782938",
                                      },
                                      {
                                        groupId: "68181396",
                                        variationId: "204782939",
                                      },
                                    ],
                                    price: 56900,
                                    finalPrice: { units: "569" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 56900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387351",
                              menuFilterIds: ["VEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262265",
                              name: "Sourdough Slim Creamy Truffle Mushroom Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Creamy truffle sauce, mushrooms and jalapeños with 4-cheeses on slim sourdough crust.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/a00de7a9-026c-4bdb-ad38-868a38942a61_c8bc10e6-4519-4681-9480-3b12abab41cc.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181419",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782962",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181420",
                                          variationId: "204782963",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181420",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782963",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181419",
                                        variationId: "204782962",
                                      },
                                      {
                                        groupId: "68181420",
                                        variationId: "204782963",
                                      },
                                    ],
                                    price: 61900,
                                    finalPrice: { units: "619" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 61900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387354",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262248",
                              name: "Sourdough Slim Pesto Veggie Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Grilled red & yellow bell peppers, olives and a basil pesto drizzle over 4-cheeses on slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/d95dffe4-ac6e-4008-b563-7dfe0f227a4f_2d7c55b2-e752-4b25-8c34-1fc6401f029e.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181389",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782932",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181390",
                                          variationId: "204782933",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181390",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782933",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181389",
                                        variationId: "204782932",
                                      },
                                      {
                                        groupId: "68181390",
                                        variationId: "204782933",
                                      },
                                    ],
                                    price: 61900,
                                    finalPrice: { units: "619" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 61900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387358",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262266",
                              name: "Sourdough Slim Classic Truffle Pepperoni Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Succulent chicken pepperoni, truffle mushroom sauce and molten 4-cheeses on slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/5b5d9847-38f8-4f85-9d77-5a0bea782c2a_99d475f0-901f-4def-8a33-1f0015be3a75.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181421",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782964",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181422",
                                          variationId: "204782965",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181422",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782965",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181421",
                                        variationId: "204782964",
                                      },
                                      {
                                        groupId: "68181422",
                                        variationId: "204782965",
                                      },
                                    ],
                                    price: 61900,
                                    finalPrice: { units: "619" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 61900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387350",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262267",
                              name: "Sourdough Slim Chicken Pepperoni Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Smoky chicken pepperoni with 4-cheeses on a thin, slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/5b5d9847-38f8-4f85-9d77-5a0bea782c2a_99d475f0-901f-4def-8a33-1f0015be3a75.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181423",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782966",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181424",
                                          variationId: "204782967",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181424",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782967",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181423",
                                        variationId: "204782966",
                                      },
                                      {
                                        groupId: "68181424",
                                        variationId: "204782967",
                                      },
                                    ],
                                    price: 61900,
                                    finalPrice: { units: "619" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 61900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387349",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262238",
                              name: "Sourdough Slim Pesto Chicken Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Grilled chicken, olives and herby basil pesto swirl over 4-cheeses on slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/2abb8841-a23b-4409-ae1f-a4cfad38df9e_345d4798-2ff3-41b4-b2e9-29a5cd349112.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181369",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782912",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181370",
                                          variationId: "204782913",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181370",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782913",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181369",
                                        variationId: "204782912",
                                      },
                                      {
                                        groupId: "68181370",
                                        variationId: "204782913",
                                      },
                                    ],
                                    price: 66900,
                                    finalPrice: { units: "669" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 66900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387357",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262271",
                              name: "Sourdough Slim Creamy Truffle Chicken Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Creamy truffle mushroom sauce, grilled chicken, jalapeno and 4-cheeses on slim sourdough. Earthy and indulgent.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/a32657e7-60dd-41d7-bf64-0014983d08a4_f1d40b2b-ee7f-4eea-bc19-c23c216a1d58.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181431",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782974",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181432",
                                          variationId: "204782975",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181432",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782975",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181431",
                                        variationId: "204782974",
                                      },
                                      {
                                        groupId: "68181432",
                                        variationId: "204782975",
                                      },
                                    ],
                                    price: 66900,
                                    finalPrice: { units: "669" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 66900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387353",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "110401919",
                              name: "Chicken Keema & Onion with Desi Makhani Sauce",
                              category: "PIZZA MANIA",
                              description:
                                "Authentic Indian Flavor of Makhani Sauce loaded with meaty Chicken Keema and crunchy Onion.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/7/22/6827ba66-012d-4560-ba43-27a835adfc89_d64d974a-3b51-408f-9eb3-07fc7fa09b05.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "36864949",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Fresh Pan Pizza",
                                        id: "114853415",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36864952",
                                          variationId: "114853421",
                                        },
                                      },
                                      {
                                        name: "Classic Hand Tossed",
                                        default: 1,
                                        id: "114853417",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36864952",
                                          variationId: "114853421",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "36864952",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "114853421",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "36864949",
                                        variationId: "114853417",
                                      },
                                      {
                                        groupId: "36864952",
                                        variationId: "114853421",
                                      },
                                    ],
                                    price: 12900,
                                    finalPrice: { units: "129" },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "36864949",
                                        variationId: "114853415",
                                      },
                                      {
                                        groupId: "36864952",
                                        variationId: "114853421",
                                      },
                                    ],
                                    price: 15900,
                                    finalPrice: { units: "159" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 12900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "60938153",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "91871629",
                              name: "Non Veg Loaded",
                              category: "PIZZA MANIA",
                              description:
                                "Chicken sausage, pepper barbecue chicken & peri-peri chicken in a fresh pan crust",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/7/22/4065cdbd-f0fb-4455-9f9e-1dd72a4aa6b2_480fd6c1-0c77-4838-8864-5b086ceb541f.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "36866833",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Fresh Pan Pizza",
                                        default: 1,
                                        id: "114859017",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36866834",
                                          variationId: "114859019",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "36866834",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "114859019",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "36866833",
                                        variationId: "114859017",
                                      },
                                      {
                                        groupId: "36866834",
                                        variationId: "114859019",
                                      },
                                    ],
                                    price: 19900,
                                    finalPrice: { units: "199" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 19900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "102 ratings",
                                  ratingCountV2: "102",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "20974151",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "91871636",
                              name: "Veg Loaded",
                              category: "PIZZA MANIA",
                              description:
                                "Tomato, Jalapeno, Corn, Grilled Mushroom & crushed Aranchini Patty in a fresh pan crust",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/7/22/ec18f227-7a69-4c54-b5f1-fa1eed20a774_f8f2db28-7e9b-473a-97ed-ddf220007148.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "36865670",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Fresh Pan Pizza",
                                        default: 1,
                                        id: "114855540",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "36865671",
                                          variationId: "114855542",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "36865671",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "114855542",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "36865670",
                                        variationId: "114855540",
                                      },
                                      {
                                        groupId: "36865671",
                                        variationId: "114855542",
                                      },
                                    ],
                                    price: 18900,
                                    finalPrice: { units: "189" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 18900,
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "105 ratings",
                                  ratingCountV2: "105",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "20974245",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                      subtitleSuffix: {},
                      categoryId: "23",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Sourdough Range",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262278",
                              name: "Sourdough Garlic Bread",
                              category: "Sourdough Range",
                              description:
                                "Golden sourdough baked with garlic butter and herbs. Crisp outside, fluffy inside.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/3/28/80df1fc4-99d0-4eab-a097-148a76f6861e_47b7f36d-c375-4a45-9231-62ba1647c8dd.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 21900,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: { vegClassifier: "VEG" },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113249050",
                              menuFilterIds: ["VEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "21900",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262246",
                              name: "Sourdough Classic Veg Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "A rich medley of 4 cheeses on classic airy sourdough crust. Airy, cheesy and utterly satisfying. *Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/8/da86eec5-0c04-44c0-9958-bd8cfc610b98_8308debf-4e77-4291-ad5c-c5865ff59965.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181385",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782928",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181386",
                                          variationId: "204782929",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181386",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782929",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181385",
                                        variationId: "204782928",
                                      },
                                      {
                                        groupId: "68181386",
                                        variationId: "204782929",
                                      },
                                    ],
                                    price: 36900,
                                    finalPrice: { units: "369" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 36900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387342",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262254",
                              name: "Sourdough Classic Truffle Veg Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Velvety truffle mushroom sauce, golden 4-cheeses on airy sourdough. Creamy, earthy, indulgent.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/b27c5696-fa26-47dc-9d75-c1761085e275_2a99aa9f-d33f-4b9c-93ba-c8a0053601ef.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181400",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782943",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181402",
                                          variationId: "204782945",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181402",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782945",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181400",
                                        variationId: "204782943",
                                      },
                                      {
                                        groupId: "68181402",
                                        variationId: "204782945",
                                      },
                                    ],
                                    price: 36900,
                                    finalPrice: { units: "369" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 36900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387341",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262270",
                              name: "Sourdough Creamy Truffle Mushroom Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Creamy truffle sauce, mushrooms and jalapeños with 4-cheeses on airy sourdough crust.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/8ad9aaf9-7e5f-4793-9b4b-43a5d825ceec_1cd67f13-65e8-4a9d-8471-06b22819de95.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181429",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782972",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181430",
                                          variationId: "204782973",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181430",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782973",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181429",
                                        variationId: "204782972",
                                      },
                                      {
                                        groupId: "68181430",
                                        variationId: "204782973",
                                      },
                                    ],
                                    price: 41900,
                                    finalPrice: { units: "419" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387344",
                              menuFilterIds: ["VEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262274",
                              name: "Sourdough Pesto Veggie Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Grilled red & yellow bell peppers, olives and a basil pesto drizzle over classic sourdough topped with 4-cheeses.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/0d42cb15-444f-48a7-954f-862f010dede4_b5a7c398-d91c-4301-b9d8-1419eb737514.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181437",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782980",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181438",
                                          variationId: "204782981",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181438",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782981",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181437",
                                        variationId: "204782980",
                                      },
                                      {
                                        groupId: "68181438",
                                        variationId: "204782981",
                                      },
                                    ],
                                    price: 41900,
                                    finalPrice: { units: "419" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387348",
                              menuFilterIds: ["VEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262268",
                              name: "Sourdough Classic Truffle Pepperoni Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Succulent chicken pepperoni, truffle mushroom sauce and molten 4-cheeses on airy sourdough. Bold, smoky, irresistible.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/7821e3f9-ae75-4ec6-ba63-bae702a8bb73_86178eef-4b3b-4373-a07c-44a7f7bfa7df.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181425",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782968",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181426",
                                          variationId: "204782969",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181426",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782969",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181425",
                                        variationId: "204782968",
                                      },
                                      {
                                        groupId: "68181426",
                                        variationId: "204782969",
                                      },
                                    ],
                                    price: 41900,
                                    finalPrice: { units: "419" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387340",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262263",
                              name: "Sourdough Chicken Pepperoni Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Chicken pepperoni and 4 cheeses on airy sourdough. Savoury, smoky, an absolute delight.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/7821e3f9-ae75-4ec6-ba63-bae702a8bb73_86178eef-4b3b-4373-a07c-44a7f7bfa7df.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181414",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782957",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181416",
                                          variationId: "204782959",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181416",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782959",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181414",
                                        variationId: "204782957",
                                      },
                                      {
                                        groupId: "68181416",
                                        variationId: "204782959",
                                      },
                                    ],
                                    price: 41900,
                                    finalPrice: { units: "419" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 41900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387339",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262236",
                              name: "Sourdough Pesto Chicken Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Grilled chicken rashers, olives and a touch of basil pesto over 4-cheeses on airy sourdough. Pure delight.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/c76ec569-9678-4e6d-862c-c2a0af139c66_b49bc4a1-7c1c-418f-a3b6-ce63a4ba11c3.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181364",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782907",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181366",
                                          variationId: "204782909",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181366",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782909",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181364",
                                        variationId: "204782907",
                                      },
                                      {
                                        groupId: "68181366",
                                        variationId: "204782909",
                                      },
                                    ],
                                    price: 46900,
                                    finalPrice: { units: "469" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 46900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387347",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262241",
                              name: "Sourdough Creamy Truffle Chicken Pizza (Reg)",
                              category: "Sourdough Range",
                              description:
                                "Creamy truffle mushroom sauce, grilled chicken rashers and jalapeños over 4-cheeses on airy sourdough. Earthy, rich, indulgent.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/70fd2b37-e413-4efa-a6fc-28bb6c97c2c8_1abe61d0-b12e-4906-bec7-75e7aa808326.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181375",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782918",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181376",
                                          variationId: "204782919",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181376",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "204782919",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181375",
                                        variationId: "204782918",
                                      },
                                      {
                                        groupId: "68181376",
                                        variationId: "204782919",
                                      },
                                    ],
                                    price: 46900,
                                    finalPrice: { units: "469" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 46900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387343",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262256",
                              name: "Sourdough Slim Classic Veg Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Four rich cheeses on a crisp slim sourdough crust. Light, cheesy and perfectly satisfying.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/12313890-b30e-4fcc-9fb6-7f84d5583fef_afb7be1b-44b2-4bb7-9fa3-29beb2650ba7.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181405",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782948",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181406",
                                          variationId: "204782949",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181406",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782949",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181405",
                                        variationId: "204782948",
                                      },
                                      {
                                        groupId: "68181406",
                                        variationId: "204782949",
                                      },
                                    ],
                                    price: 56900,
                                    finalPrice: { units: "569" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 56900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387352",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262251",
                              name: "Sourdough Slim Classic Truffle Veg Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Velvety truffle mushroom sauce, 4-cheeses and veg pepperoni bites on slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/c101a6a7-4095-48e9-b384-eb805dfef8ff_bb9cd20a-16a8-4535-88f1-f4e694325041.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181395",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782938",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181396",
                                          variationId: "204782939",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181396",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782939",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181395",
                                        variationId: "204782938",
                                      },
                                      {
                                        groupId: "68181396",
                                        variationId: "204782939",
                                      },
                                    ],
                                    price: 56900,
                                    finalPrice: { units: "569" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 56900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387351",
                              menuFilterIds: ["VEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262265",
                              name: "Sourdough Slim Creamy Truffle Mushroom Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Creamy truffle sauce, mushrooms and jalapeños with 4-cheeses on slim sourdough crust.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/a00de7a9-026c-4bdb-ad38-868a38942a61_c8bc10e6-4519-4681-9480-3b12abab41cc.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181419",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782962",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181420",
                                          variationId: "204782963",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181420",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782963",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181419",
                                        variationId: "204782962",
                                      },
                                      {
                                        groupId: "68181420",
                                        variationId: "204782963",
                                      },
                                    ],
                                    price: 61900,
                                    finalPrice: { units: "619" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 61900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387354",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262248",
                              name: "Sourdough Slim Pesto Veggie Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Grilled red & yellow bell peppers, olives and a basil pesto drizzle over 4-cheeses on slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/d95dffe4-ac6e-4008-b563-7dfe0f227a4f_2d7c55b2-e752-4b25-8c34-1fc6401f029e.jpg",
                              inStock: 1,
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181389",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782932",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181390",
                                          variationId: "204782933",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181390",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782933",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181389",
                                        variationId: "204782932",
                                      },
                                      {
                                        groupId: "68181390",
                                        variationId: "204782933",
                                      },
                                    ],
                                    price: 61900,
                                    finalPrice: { units: "619" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "VEG" },
                              defaultPrice: 61900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "2 ratings",
                                  ratingCountV2: "2",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387358",
                              menuFilterIds: ["VEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262266",
                              name: "Sourdough Slim Classic Truffle Pepperoni Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Succulent chicken pepperoni, truffle mushroom sauce and molten 4-cheeses on slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/5b5d9847-38f8-4f85-9d77-5a0bea782c2a_99d475f0-901f-4def-8a33-1f0015be3a75.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181421",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782964",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181422",
                                          variationId: "204782965",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181422",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782965",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181421",
                                        variationId: "204782964",
                                      },
                                      {
                                        groupId: "68181422",
                                        variationId: "204782965",
                                      },
                                    ],
                                    price: 61900,
                                    finalPrice: { units: "619" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 61900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387350",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262267",
                              name: "Sourdough Slim Chicken Pepperoni Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Smoky chicken pepperoni with 4-cheeses on a thin, slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/5b5d9847-38f8-4f85-9d77-5a0bea782c2a_99d475f0-901f-4def-8a33-1f0015be3a75.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181423",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782966",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181424",
                                          variationId: "204782967",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181424",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782967",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181423",
                                        variationId: "204782966",
                                      },
                                      {
                                        groupId: "68181424",
                                        variationId: "204782967",
                                      },
                                    ],
                                    price: 61900,
                                    finalPrice: { units: "619" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 61900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387349",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262238",
                              name: "Sourdough Slim Pesto Chicken Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Grilled chicken, olives and herby basil pesto swirl over 4-cheeses on slim sourdough crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/2abb8841-a23b-4409-ae1f-a4cfad38df9e_345d4798-2ff3-41b4-b2e9-29a5cd349112.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181369",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782912",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181370",
                                          variationId: "204782913",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181370",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782913",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181369",
                                        variationId: "204782912",
                                      },
                                      {
                                        groupId: "68181370",
                                        variationId: "204782913",
                                      },
                                    ],
                                    price: 66900,
                                    finalPrice: { units: "669" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 66900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: { aggregatedRating: {} },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387357",
                              menuFilterIds: ["NONVEG", "offer"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "0",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "186262271",
                              name: "Sourdough Slim Creamy Truffle Chicken Pizza (Med)",
                              category: "Sourdough Range",
                              description:
                                "Creamy truffle mushroom sauce, grilled chicken, jalapeno and 4-cheeses on slim sourdough. Earthy and indulgent.*Leaves subject to availability",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/11/7/a32657e7-60dd-41d7-bf64-0014983d08a4_f1d40b2b-ee7f-4eea-bc19-c23c216a1d58.jpg",
                              inStock: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "68181431",
                                    name: "Crust",
                                    variations: [
                                      {
                                        name: "Sourdough",
                                        default: 1,
                                        id: "204782974",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "68181432",
                                          variationId: "204782975",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "68181432",
                                    name: "Size",
                                    variations: [
                                      {
                                        name: "Medium",
                                        default: 1,
                                        id: "204782975",
                                        inStock: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "68181431",
                                        variationId: "204782974",
                                      },
                                      {
                                        groupId: "68181432",
                                        variationId: "204782975",
                                      },
                                    ],
                                    price: 66900,
                                    finalPrice: { units: "669" },
                                  },
                                ],
                              },
                              itemAttribute: { vegClassifier: "NONVEG" },
                              defaultPrice: 66900,
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "₹200 OFF",
                                  subTitle: "USE CELEBRATIONS",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "1 rating",
                                  ratingCountV2: "1",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "034fcdf4-0362-410e-a6d7-89a32558497f",
                              ],
                              parentId: "113387353",
                              menuFilterIds: ["NONVEG", "offer", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/3/28/80df1fc4-99d0-4eab-a097-148a76f6861e_47b7f36d-c375-4a45-9231-62ba1647c8dd.jpg",
                      categoryId: "68544771",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "0cea0123-cf48-49c1-b70a-b5a284070ebc",
  sid: "rckf495abae-771e-4e3b-958b-bc0671d5c",
  deviceId: "ce7b7453-3f30-449b-9775-571a074c895d",
  csrfToken: "wNM7Zs7TbMvu-n0xzC8WwG7ebAsLMCZFlAy7zRuM",
};
