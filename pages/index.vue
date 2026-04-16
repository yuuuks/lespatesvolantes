<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const mobileNavOpen = ref(false)
const scrolled = ref(false)

watch(menuOpen, (val) => {
  if (val) mobileNavOpen.value = false
  document.body.style.overflow = val || mobileNavOpen.value ? 'hidden' : ''
})
watch(mobileNavOpen, (val) => {
  document.body.style.overflow = val || menuOpen.value ? 'hidden' : ''
})

function onScroll() { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="bg-cream text-charcoal font-sans">

    <!-- Navigation -->
    <header :class="['nav', { 'nav--scrolled': scrolled }]">
      <div class="nav__inner">
        <a href="#" class="nav__brand">Les Pâtes Volantes</a>
        <ul class="nav__links">
          <li><a href="#a-propos" class="nav__link">À propos</a></li>
          <li><a href="#horaires" class="nav__link">Horaires</a></li>
          <li><a href="#services" class="nav__link">Services</a></li>
        </ul>
        <a href="https://www.ubereats.com/fr/store/les-pates-volantes/NGicsfrxRbSE7hQeYpmJHQ" target="_blank" rel="noopener noreferrer" class="nav__cta">
          <svg class="nav__cta-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="5.5" cy="17.5" r="2.5" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="18.5" cy="17.5" r="2.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 17.5h7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16 17.5V11l-3-5H8L6 11h10" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M16 11h4l1 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="10" cy="7" r="1" fill="currentColor"/>
          </svg>
          Commander →
        </a>
        <button @click="mobileNavOpen = !mobileNavOpen" class="nav__burger" :aria-expanded="mobileNavOpen" aria-label="Menu">
          <span :class="['nav__burger-line', { 'top-open': mobileNavOpen }]"></span>
          <span :class="['nav__burger-line', { 'mid-open': mobileNavOpen }]"></span>
          <span :class="['nav__burger-line', { 'bot-open': mobileNavOpen }]"></span>
        </button>
      </div>
    </header>

    <Transition name="mobile-nav">
      <div v-if="mobileNavOpen" class="mobile-nav">
        <span class="mobile-nav__char" aria-hidden="true">面</span>
        <nav class="mobile-nav__links">
          <a href="#a-propos" class="mobile-nav__link" @click="mobileNavOpen = false">À propos</a>
          <a href="#horaires" class="mobile-nav__link" @click="mobileNavOpen = false">Horaires</a>
          <a href="#services" class="mobile-nav__link" @click="mobileNavOpen = false">Services</a>
          <button class="mobile-nav__menu-btn" @click="menuOpen = true; mobileNavOpen = false">Voir le menu →</button>
          <a href="https://www.ubereats.com/fr/store/les-pates-volantes/NGicsfrxRbSE7hQeYpmJHQ" target="_blank" rel="noopener noreferrer" class="mobile-nav__uber-btn">Se faire livrer →</a>
        </nav>
        <p class="mobile-nav__address">31 Rue St Jean du Pérot · La Rochelle</p>
      </div>
    </Transition>

    <!-- Hero -->
    <section class="hero-c">
      <!-- Idéogramme en filigrane -->
      <span class="hero-c__char" aria-hidden="true">面</span>
      <!-- Barre horizontale décorative -->
      <div class="hero-c__bar" aria-hidden="true"></div>

      <div class="hero-c__content">
        <p class="hero-c__eyebrow">La Rochelle · Cuisine Chinoise</p>
        <h1 class="hero-c__title">
          <span class="hero-c__title-outline">Les</span><br />
          <em class="hero-c__title-em">Pâtes</em><br />
          Volantes
        </h1>
        <div class="hero-c__meta">
          <div class="hero-c__meta-line"></div>
          <p>Lamian · Pad Thaï · Nouilles au Wok</p>
        </div>
        <a href="#a-propos" class="hero-c__btn-secondary">Notre histoire →</a>
        <div class="hero-c__ctas">
          <button @click="menuOpen = true" class="hero-c__btn-primary">Voir le menu</button>
        </div> 
      </div>
    </section>

    <!-- Modale Menu -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="menuOpen" class="modal-backdrop" @click.self="menuOpen = false" role="dialog" aria-modal="true" aria-label="Notre carte">
          <div class="modal-panel">

            <!-- Header modale -->


            <!-- Contenu scrollable -->
            <div class="modal-body">

              <!-- Formule -->
              <div class="menu-formule">
                <p class="menu-formule__label">Formule</p>
                <div class="menu-formule__body">
                  <span class="menu-formule__name font-serif">Les Pâtes Volantes</span>
                  <span class="menu-formule__dots"></span>
                  <span class="menu-formule__detail">Entrée + Plat + Dessert</span>
                  <span class="menu-formule__price">24.90€</span>
                </div>
              </div>

              <!-- Entrées -->
              <div class="menu-block">
                <div class="menu-block__header">
                  <h3 class="menu-block__title font-serif">Entrées</h3>
                </div>
                <div class="menu-two-col">
                  <ul class="menu-list">
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Gyozas au poulet</span>
                        <span class="menu-item__note">6 pièces · menu +1.00€</span>
                        <span class="menu-item__desc">Raviolis grillés farcis aux légumes et poulet</span>
                      </div>
                      <span class="menu-item__price">7.90€</span>
                    </li>
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Gyozas véggie</span>
                        <span class="menu-item__note">6 pièces · menu +1.00€</span>
                        <span class="menu-item__desc">Chou, oignon, ciboulette et carotte</span>
                      </div>
                      <span class="menu-item__price">7.90€</span>
                    </li>
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Nems aux crevettes</span>
                        <span class="menu-item__note">4 pièces · menu +1.00€</span>
                      </div>
                      <span class="menu-item__price">7.90€</span>
                    </li>
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Nems porc ou poulet</span>
                        <span class="menu-item__note">4 pièces</span>
                      </div>
                      <span class="menu-item__price">6.90€</span>
                    </li>
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Samoussa boeuf &amp; curry</span>
                        <span class="menu-item__note">4 pièces</span>
                      </div>
                      <span class="menu-item__price">6.90€</span>
                    </li>
                  </ul>
                  <ul class="menu-list">
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Tempura de Gambas</span>
                        <span class="menu-item__note">4 pièces</span>
                      </div>
                      <span class="menu-item__price">6.90€</span>
                    </li>
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Raviolis vapeur crevette</span>
                        <span class="menu-item__note">4 pièces</span>
                      </div>
                      <span class="menu-item__price">6.90€</span>
                    </li>
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Salade d'algues</span>
                      </div>
                      <span class="menu-item__price">5.90€</span>
                    </li>
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Nems au fromage</span>
                        <span class="menu-item__note">Emmental &amp; Mozza · 4 pièces</span>
                      </div>
                      <span class="menu-item__price">6.90€</span>
                    </li>
                    <li class="menu-item">
                      <div class="menu-item__left">
                        <span class="menu-item__name">Croustillant de seiche</span>
                        <span class="menu-item__note">4 pièces</span>
                      </div>
                      <span class="menu-item__price">6.90€</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Plats -->
              <div class="menu-block">
                <div class="menu-block__header">
                  <h3 class="menu-block__title font-serif">Plats</h3>
                </div>
                <div class="menu-two-col">
                  <div class="menu-col-group">
                    <div class="menu-subcat">
                      <p class="menu-subcat__title font-serif">Lamian <em>Soupe de nouilles</em></p>
                      <p class="menu-subcat__desc">Soupe de nouilles maison, épinard, pousses de soja, carottes, ciboulette et huile légèrement pimentée. Bouillon de Viande.</p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Lamian au Boeuf</span><span class="menu-item__price">14.90€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Lamian au Canard laqué</span><span class="menu-item__price">14.90€</span></li>
                        <li class="menu-item">
                          <div class="menu-item__left">
                            <span class="menu-item__name">Lamian aux Ravioles de Crevettes</span>
                            <span class="menu-item__desc">Bouillon au saté cacahuète</span>
                          </div>
                          <span class="menu-item__price">14.90€</span>
                        </li>
                        <li class="menu-item"><span class="menu-item__name">Lamian aux Légumes</span><span class="menu-item__price">13.90€</span></li>
                      </ul>
                    </div>
                    <div class="menu-subcat">
                      <p class="menu-subcat__title font-serif">Pad Thaï <em>Nouilles de Riz</em></p>
                      <p class="menu-subcat__desc">Œuf, pousses de soja, carottes râpées, choux, edamame, sésame doré, cacahuètes, ciboulette et oignons frits.</p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Pad Thaï au Boeuf soja épicé</span><span class="menu-item__price">14.90€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Pad Thaï au Poulet</span><span class="menu-item__price">14.90€</span></li>
                        <li class="menu-item">
                          <div class="menu-item__left">
                            <span class="menu-item__name">Pad Thaï au Canard laqué basilic</span>
                            <span class="menu-item__desc">Légèrement épicé</span>
                          </div>
                          <span class="menu-item__price">14.90€</span>
                        </li>
                        <li class="menu-item"><span class="menu-item__name">Pad Thaï aux Crevettes sauce saté</span><span class="menu-item__price">14.90€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Pad Thaï Végétarien sauce soja</span><span class="menu-item__price">13.90€</span></li>
                      </ul>
                    </div>
                  </div>
                  <div class="menu-col-group">
                    <div class="menu-subcat">
                      <p class="menu-subcat__title font-serif">Nouilles sautées au Wok <em>Nouilles de Blé</em></p>
                      <p class="menu-subcat__desc">Nouilles maison, pousses de soja, choux, edamame, œuf, carottes râpées, ciboulette, cacahuète, sésame doré et oignons frits.</p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Nouilles sautées au Boeuf &amp; Cumin</span><span class="menu-item__price">14.90€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Nouilles sautées au Poulet</span><span class="menu-item__price">14.90€</span></li>
                        <li class="menu-item">
                          <div class="menu-item__left">
                            <span class="menu-item__name">Nouilles sautées Canard laqué &amp; Basilic</span>
                            <span class="menu-item__desc">Légèrement épicé</span>
                          </div>
                          <span class="menu-item__price">14.90€</span>
                        </li>
                        <li class="menu-item"><span class="menu-item__name">Nouilles sautées Crevettes Saté</span><span class="menu-item__price">14.90€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Nouilles sautées aux Légumes</span><span class="menu-item__price">13.90€</span></li>
                        <li class="menu-item">
                          <div class="menu-item__left">
                            <span class="menu-item__name">Bol Enfant</span>
                            <span class="menu-item__note">Moins de 10 ans · Nouilles légumes</span>
                          </div>
                          <span class="menu-item__price">6.90€</span>
                        </li>
                      </ul>
                    </div>
                    <div class="menu-subcat">
                      <p class="menu-subcat__title font-serif">Riz au Curry</p>
                      <ul class="menu-list">
                        <li class="menu-item">
                          <div class="menu-item__left">
                            <span class="menu-item__name">Riz au Curry au Poulet Pané</span>
                            <span class="menu-item__desc">Riz japonais, poulet pané, pommes de terre, carottes</span>
                          </div>
                          <span class="menu-item__price">14.90€</span>
                        </li>
                        <li class="menu-item">
                          <div class="menu-item__left">
                            <span class="menu-item__name">Riz au Curry Tempura de Gambas</span>
                            <span class="menu-item__desc">Riz japonais, tempura de Gambas, pommes de terre, carottes</span>
                          </div>
                          <span class="menu-item__price">14.90€</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Suppléments -->
              <div class="menu-supplements">
                <p>Supplément Œuf frit <strong>1.50€</strong></p>
                <span class="menu-supplements__sep">·</span>
                <p>Supplément Pâtes ou Viande <strong>3.00€</strong></p>
                <span class="menu-supplements__sep">·</span>
                <p>Saté : cacahuètes, piments, oignons, tomate et crevettes concassées</p>
              </div>

              <!-- Vins & Boissons -->
              <div class="menu-block">
                <div class="menu-block__header">
                  <h3 class="menu-block__title font-serif">Vins &amp; Boissons</h3>
                </div>
                <div class="menu-two-col">
                  <div class="menu-col-group">
                    <div class="menu-subcat">
                      <p class="menu-subcat__title font-serif">Vins <em>75cl / 37.5cl</em></p>
                      <p class="menu-drinks__subcat">Rosé</p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Côtes de Provence</span><span class="menu-item__price">26€ / 14.50€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Mareuil</span><span class="menu-item__price">26€ / 14.50€</span></li>
                      </ul>
                      <p class="menu-drinks__subcat">Blanc</p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Entre-deux-mers</span><span class="menu-item__price">26€ / 14.50€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Pouilly Fumé</span><span class="menu-item__price">37€ / 19.00€</span></li>
                      </ul>
                      <p class="menu-drinks__subcat">Rouge</p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Chinon</span><span class="menu-item__price">26€ / 14.50€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Côtes du Rhône</span><span class="menu-item__price">25€ / 14.50€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Graves</span><span class="menu-item__price">30€ / 15.90€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Pessac Léognan</span><span class="menu-item__price">45€</span></li>
                      </ul>
                      <p class="menu-drinks__note">Verre de vin 12cl — Rouge / Blanc / Rosé <strong>5.90€</strong></p>
                    </div>
                  </div>
                  <div class="menu-col-group">
                    <div class="menu-subcat">
                      <p class="menu-subcat__title font-serif">Bières <em>33cl</em></p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Tsingtao · CASS · Singha</span><span class="menu-item__price">4.90€</span></li>
                      </ul>
                    </div>
                    <div class="menu-subcat">
                      <p class="menu-subcat__title font-serif">Boissons Chaudes</p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Café / Décaféiné</span><span class="menu-item__price">2.10€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Thé Vert, Menthe ou Jasmin</span><span class="menu-item__price">3.90€</span></li>
                      </ul>
                    </div>
                    <div class="menu-subcat">
                      <p class="menu-subcat__title font-serif">Digestifs</p>
                      <ul class="menu-list">
                        <li class="menu-item"><span class="menu-item__name">Saké 2cl</span><span class="menu-item__price">3.90€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Get 27 4cl</span><span class="menu-item__price">4.90€</span></li>
                        <li class="menu-item"><span class="menu-item__name">Cognac 4cl</span><span class="menu-item__price">6.50€</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div><!-- /modal-body -->
          </div><!-- /modal-panel -->
        </div><!-- /modal-backdrop -->
      </Transition>
    </Teleport>

        <!-- Heures d'ouverture -->
    <section id="horaires" class="py-20 bg-cream border-t border-warm-gray/15">
      <div class="max-w-2xl mx-auto px-6">

        <div class="text-center mb-14">
          <p class="text-xs tracking-[0.4em] uppercase text-terracotta mb-3">Quand nous rendre visite</p>
          <h2 class="font-serif text-4xl font-semibold text-charcoal">Heures d'ouverture</h2>
        </div>

        <div class="noresrv-banner" role="alert">
          <svg class="noresrv-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.6"/>
            <path d="M12 7v5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="12" cy="16.5" r="1" fill="currentColor"/>
          </svg>
          <div>
            <p class="noresrv-title">Pas de réservation</p>
            <p class="noresrv-sub">Nous n'acceptons pas les réservations — venez directement au restaurant, nous vous accueillerons avec plaisir.</p>
          </div>
        </div>

        <ul class="hours-list">

          <li class="hours-row hours-row--closed">
            <span class="hours-day">Lundi</span>
            <span class="hours-dots"></span>
            <span class="hours-status">Fermé</span>
          </li>

          <li class="hours-row">
            <span class="hours-day">Mardi — Dimanche</span>
            <span class="hours-dots"></span>
            <div class="hours-slots">
              <span class="hours-slot">12:00 – 14:00</span>
              <span class="hours-slot-sep">·</span>
              <span class="hours-slot">19:00 – 22:00</span>
            </div>
          </li>

        </ul>

        <p class="pay-strip">
          <span class="pay-strip__label">Paiement : </span>
          CB · Visa · Mastercard · Espèces · Tickets restaurant · Chèques Vacances
        </p>

      </div>
    </section>


    <!-- Nos Services -->
    <section id="services" class="py-20 bg-cream border-t border-warm-gray/15">
      <div class="max-w-5xl mx-auto px-6">

        <div class="text-center mb-14">
          <p class="text-xs tracking-[0.4em] uppercase text-terracotta mb-3">Infos pratiques</p>
          <h2 class="font-serif text-4xl font-semibold text-charcoal">Nos services</h2>
          <div class="flex items-center justify-center gap-4 mt-4">
            <div class="svc-sep-line"></div>
            <span class="svc-sep-text">Pour votre confort &amp; tranquillité</span>
            <div class="svc-sep-line"></div>
          </div>
        </div>

        <ul class="svc-grid">

          <li class="svc-item">
            <div class="svc-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="8" r="3" stroke="currentColor" stroke-width="1.6"/>
                <path d="M20 13v8l-5 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M20 21l5 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <circle cx="13" cy="31" r="3.5" stroke="currentColor" stroke-width="1.6"/>
                <circle cx="27" cy="31" r="3.5" stroke="currentColor" stroke-width="1.6"/>
                <path d="M24 31h-8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="svc-label">Accès PMR</span>
            <span class="svc-sublabel">Personnes à mobilité réduite</span>
          </li>

          <li class="svc-item">
            <div class="svc-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="17" width="20" height="11" rx="2" stroke="currentColor" stroke-width="1.6"/>
                <path d="M26 22h5l3 4v2h-8V22z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <circle cx="11" cy="30" r="2.5" stroke="currentColor" stroke-width="1.6"/>
                <circle cx="29" cy="30" r="2.5" stroke="currentColor" stroke-width="1.6"/>
                <path d="M11 17V12a2 2 0 012-2h6a2 2 0 012 2v5" stroke="currentColor" stroke-width="1.6"/>
              </svg>
            </div>
            <span class="svc-label">Livraison</span>
            <span class="svc-sublabel">Via Uber Eats</span>
          </li>

          <li class="svc-item">
            <div class="svc-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 22h24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M12 22V32" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M28 22V32" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M10 32h20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M20 22C20 15 10 13 10 13s10-1 10 9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <path d="M20 22C20 15 30 13 30 13s-10-1-10 9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="svc-label">Terrasse</span>
            <span class="svc-sublabel">En plein air</span>
          </li>

          <li class="svc-item">
            <div class="svc-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10h14l2 20H11L13 10z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <path d="M16 10V8a4 4 0 018 0v2" stroke="currentColor" stroke-width="1.6"/>
                <path d="M16 20h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="svc-label">À emporter</span>
            <span class="svc-sublabel">Sur commande · tel ou comptoir</span>
          </li>

          <li class="svc-item">
            <div class="svc-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16c3.3-4.4 10.7-4.4 14 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M12 20c1.7-2.2 4.3-2.2 6 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M4 12C9.3 5.6 20.7 5.6 26 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <circle cx="15" cy="27" r="2" fill="currentColor"/>
                <path d="M29 12l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="svc-label">Wi-Fi gratuit</span>
            <span class="svc-sublabel">Haut débit</span>
          </li>

          <li class="svc-item">
            <div class="svc-icon" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="14" cy="15" rx="3" ry="2" stroke="currentColor" stroke-width="1.6"/>
                <ellipse cx="20" cy="13" rx="3" ry="2" stroke="currentColor" stroke-width="1.6"/>
                <ellipse cx="26" cy="15" rx="3" ry="2" stroke="currentColor" stroke-width="1.6"/>
                <path d="M11 20c0-3 9-3 9-3s9 0 9 3c0 6-4 11-9 11s-9-5-9-11z" stroke="currentColor" stroke-width="1.6"/>
                <path d="M17 27c1 1 2 1.5 3 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="svc-label">Animaux bienvenus</span>
            <span class="svc-sublabel">Animaux domestiques autorisés</span>
          </li>

        </ul>
      </div>
    </section>

    <!-- À propos -->
    <section id="a-propos" class="py-24 bg-charcoal overflow-hidden">
      <div class="max-w-5xl mx-auto px-6">

        <div class="about-layout">

          <!-- Colonne gauche : titre + déco -->
          <div class="about-left">
            <p class="text-xs tracking-[0.4em] uppercase text-terracotta mb-4">Notre histoire</p>
            <h2 class="font-serif text-5xl font-semibold text-cream leading-tight mb-8">
              À propos<br />
              <em class="about-em">de nous</em>
            </h2>
            <div class="about-rule"></div>
            <p class="about-tagline font-serif">Pâtes fraîches<br/>façonnées à la main</p>
          </div>

          <!-- Colonne droite : texte -->
          <div class="about-right">
            <p class="about-body">
              Au cœur de La Rochelle, <strong>Les Pâtes Volantes</strong> vous invite à redécouvrir l'art des pâtes fraîches. Façonnées chaque matin selon des méthodes ancestrales, étirées à la main et cuisinées avec des ingrédients soigneusement sélectionnés, nos nouilles incarnent l'authenticité de la cuisine asiatique.
            </p>
            <p class="about-body">
              Dans une salle chaleureuse et conviviale, laissez-vous porter par les arômes du wok et la générosité d'une cuisine qui prend soin de vous — que vous soyez de passage à La Rochelle ou fidèle à notre table depuis le premier jour.
            </p>
            <a href="https://www.google.com/maps/place/Les+P%C3%A2tes+Volantes/@46.1560626,-1.1582444,17z/data=!3m1!4b1!4m6!3m5!1s0x480153a4cf6965d1:0x5fa4da627016c6d!8m2!3d46.1560626!4d-1.1556695!16s%2Fg%2F11c0xhz2vz?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="about-cta">Nous trouver →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-charcoal text-cream/60 py-8 px-6 text-center text-sm">
      <p class="font-serif text-cream text-lg mb-2">Les Pâtes Volantes</p>
      <p>31 Rue St Jean du Pérot, 17000 La Rochelle — 05 16 85 96 15</p>
      <p class="mt-4 text-cream/30">© 2026 Les Pâtes Volantes. Tous droits réservés.</p>
    </footer>

  </div>
</template>

<style scoped>
/* ── Navbar ─────────────────────────────────── */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  transition: background 0.3s, box-shadow 0.3s;
}
.nav__inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 0;
  transition: padding 0.3s;
}
.nav--scrolled {
  background: rgba(249,245,239,0.96);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 0 rgba(140,123,107,0.15);
}
.nav--scrolled .nav__inner { padding-top: 1rem; padding-bottom: 1rem; }
.nav__brand { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 600; color: #2C2C2C; text-decoration: none; letter-spacing: 0.02em; transition: color 0.2s; }
.nav__brand:hover { color: #C1440E; }
.nav__links { display: flex; align-items: center; gap: 2.5rem; list-style: none; margin-left: auto; }
@media (max-width: 768px) { .nav__links { display: none; } }
.nav__link { font-size: 0.68rem; letter-spacing: 0.25em; text-transform: uppercase; color: #2C2C2C; text-decoration: none; font-family: 'Inter', sans-serif; font-weight: 400; position: relative; transition: color 0.2s; }
.nav__link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: #C1440E; transition: width 0.25s; }
.nav__link:hover { color: #C1440E; }
.nav__link:hover::after { width: 100%; }
.nav__cta { display: inline-flex; align-items: center; gap: 0.5rem; margin-left: 2rem; font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; font-family: 'Inter', sans-serif; font-weight: 500; color: #F9F5EF; background: #C1440E; padding: 0.6rem 1.2rem; transition: background 0.2s; text-decoration: none; white-space: nowrap; }
.nav__cta:hover { background: #a83a0c; }
.nav__cta-icon { width: 16px; height: 16px; flex-shrink: 0; }
@media (max-width: 768px) { .nav__cta { display: none; } }
.nav__burger { display: none; flex-direction: column; justify-content: center; gap: 5px; width: 2rem; height: 2rem; background: none; border: none; cursor: pointer; padding: 0; }
@media (max-width: 768px) { .nav__burger { display: flex; } }
.nav__burger-line { display: block; width: 22px; height: 1.5px; background: #2C2C2C; transition: transform 0.25s, opacity 0.25s; transform-origin: center; }
.top-open { transform: translateY(6.5px) rotate(45deg); }
.mid-open { opacity: 0; transform: scaleX(0); }
.bot-open { transform: translateY(-6.5px) rotate(-45deg); }
.mobile-nav { position: fixed; inset: 0; z-index: 40; background: #2C2C2C; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; }
.mobile-nav__char { position: absolute; font-family: 'Playfair Display', serif; font-size: 60vw; line-height: 1; color: rgba(193,68,14,0.06); pointer-events: none; user-select: none; }
.mobile-nav__links { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; position: relative; z-index: 1; }
.mobile-nav__link { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 8vw, 3.5rem); font-weight: 600; color: rgba(249,245,239,0.5); text-decoration: none; line-height: 1.3; transition: color 0.2s; }
.mobile-nav__link:hover { color: #F9F5EF; }
.mobile-nav__menu-btn { margin-top: 1rem; font-family: 'Playfair Display', serif; font-size: clamp(2rem, 8vw, 3.5rem); font-weight: 600; font-style: italic; color: #C1440E; background: none; border: none; cursor: pointer; line-height: 1.3; transition: color 0.2s; }
.mobile-nav__menu-btn:hover { color: #F9F5EF; }
.mobile-nav__uber-btn { margin-top: 0.5rem; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; font-family: 'Inter', sans-serif; font-weight: 500; color: #F9F5EF; background: #C1440E; padding: 0.75rem 1.8rem; text-decoration: none; transition: background 0.2s; display: inline-block; }
.mobile-nav__uber-btn:hover { background: #a83a0c; }
.mobile-nav__address { position: absolute; bottom: 2rem; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(249,245,239,0.25); font-family: 'Inter', sans-serif; }
.mobile-nav-enter-active, .mobile-nav-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.mobile-nav-enter-from, .mobile-nav-leave-to { opacity: 0; transform: translateY(-1rem); }

/* ── Hero Option C — Typographique bold ─────── */
.hero-c {
  min-height: 90svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 0 6rem;
  background: #F9F5EF;
}

@media (max-width: 768px) {
  .hero-c { padding: 6rem 2rem 2rem; }
}

/* Idéogramme 面 en filigrane */
.hero-c__char {
  position: absolute;
  right: -2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: clamp(16rem, 28vw, 32rem);
  line-height: 1;
  color: rgba(193, 68, 14, 0.05);
  font-family: 'Playfair Display', serif;
  pointer-events: none;
  user-select: none;
}

/* Filet horizontal décoratif */
.hero-c__bar {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #C1440E;
  opacity: 0.18;
  pointer-events: none;
}

.hero-c__content {
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.hero-c__eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #C1440E;
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

.hero-c__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 10vw, 7.5rem);
  font-weight: 700;
  line-height: 0.92;
  color: #2C2C2C;
  margin-bottom: 2rem;
}

/* "Les" en texte contour */
.hero-c__title-outline {
  -webkit-text-stroke: 2px #2C2C2C;
  color: transparent;
}

/* "Pâtes" en italique terracotta */
.hero-c__title-em {
  font-style: italic;
  color: #C1440E;
  -webkit-text-stroke: 0;
}

.hero-c__meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.hero-c__meta-line {
  width: 30px;
  height: 1px;
  background: #8C7B6B;
  flex-shrink: 0;
}

.hero-c__meta p {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8C7B6B;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
}

.hero-c__ctas {
  margin-top: 2rem;
}

.hero-c__btn-primary {
  background: #C1440E;
  color: #F9F5EF;
  padding: 1.1rem 3.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: background 0.2s, transform 0.15s;
  display: inline-block;
}

.hero-c__btn-primary:hover {
  background: #2C2C2C;
  transform: translateY(-1px);
}

.hero-c__btn-secondary {
  color: #2C2C2C;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  border-bottom: 1px solid #2C2C2C;
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}

.hero-c__btn-secondary:hover {
  color: #C1440E;
  border-color: #C1440E;
}

/* ── Modale Menu ────────────────────────────── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(44, 44, 44, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 1rem;
  overflow-y: auto;
}

.modal-panel {
  background: #F9F5EF;
  width: 100%;
  max-width: 900px;
  min-height: min-content;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 2.5rem 1.5rem;
  border-bottom: 2px solid #2C2C2C;
  position: sticky;
  top: 0;
  background: #F9F5EF;
  z-index: 1;
}

.modal-close {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8C7B6B;
  flex-shrink: 0;
  transition: color 0.15s;
  margin-top: 0.25rem;
}
.modal-close:hover { color: #C1440E; }
.modal-close svg { width: 20px; height: 20px; }

.modal-body {
  padding: 2rem 2.5rem 3rem;
  overflow-y: auto;
}

@media (max-width: 640px) {
  .modal-header { padding: 1.5rem 1.25rem 1rem; }
  .modal-body { padding: 1.5rem 1.25rem 2.5rem; }
}

/* Transitions modale */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: translateY(16px);
  opacity: 0;
}

/* ── Section Menu ───────────────────────────── */
.menu-sep-line { width: 40px; height: 1px; background: #8C7B6B; opacity: 0.4; }
.menu-sep-text { font-size: 0.72rem; letter-spacing: 0.15em; color: #8C7B6B; font-weight: 300; }

/* Formule */
.menu-formule {
  border: 1px solid rgba(193,68,14,0.25);
  padding: 1.25rem 2rem;
  background: rgba(193,68,14,0.03);
  margin-bottom: 3rem;
}
.menu-formule__label {
  font-size: 0.6rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: #C1440E;
  margin-bottom: 0.5rem;
}
.menu-formule__body {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.menu-formule__name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2C2C2C;
}
.menu-formule__dots {
  flex: 1;
  border-bottom: 1px dotted rgba(140,123,107,0.35);
  min-width: 2rem;
}
.menu-formule__detail {
  font-size: 0.75rem;
  color: #8C7B6B;
  letter-spacing: 0.08em;
}
.menu-formule__price {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #C1440E;
  font-weight: 600;
}

/* Blocs (Entrées / Plats) */
.menu-block { margin-bottom: 3.5rem; }
.menu-block__header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #2C2C2C;
}
.menu-block__title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #2C2C2C;
  white-space: nowrap;
}

/* Grille 2 colonnes */
.menu-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}
@media (max-width: 680px) {
  .menu-two-col { grid-template-columns: 1fr; gap: 2rem; }
}

/* Sous-catégorie (Lamian, Pad Thaï, etc.) */
.menu-col-group { display: flex; flex-direction: column; gap: 2.5rem; }
.menu-subcat__title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #2C2C2C;
  margin-bottom: 0.35rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.menu-subcat__title em {
  font-size: 0.72rem;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8C7B6B;
}
.menu-subcat__desc {
  font-size: 0.75rem;
  font-weight: 300;
  color: #8C7B6B;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  font-style: italic;
}

/* Liste d'items */
.menu-list { list-style: none; width: 100%; }
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(140,123,107,0.1);
}
.menu-item:last-child { border-bottom: none; }
.menu-item__left {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.menu-item__name {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  color: #2C2C2C;
  font-weight: 400;
}
.menu-item__note {
  font-size: 0.62rem;
  color: #8C7B6B;
  font-weight: 300;
  letter-spacing: 0.05em;
}
.menu-item__desc {
  font-size: 0.68rem;
  color: #8C7B6B;
  font-weight: 300;
  line-height: 1.4;
  font-style: italic;
}
.menu-item__price {
  font-size: 0.88rem;
  color: #C1440E;
  font-weight: 400;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Suppléments */
.menu-supplements {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.7rem;
  color: #8C7B6B;
  border-top: 1px solid rgba(140,123,107,0.2);
  padding-top: 1.5rem;
  margin-top: 1rem;
}
.menu-supplements__sep { color: #C1440E; opacity: 0.4; }

/* Boissons */
.menu-drinks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
@media (max-width: 640px) { .menu-drinks { grid-template-columns: 1fr; } }
.menu-drinks__heading {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #2C2C2C;
  margin-bottom: 0.5rem;
}
.menu-drinks__subcat {
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #C1440E;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}
.menu-drinks__note {
  font-size: 0.7rem;
  color: #8C7B6B;
  margin-top: 0.75rem;
  font-style: italic;
}

/* ── Section Services ───────────────────────── */
.svc-sep-line { width: 40px; height: 1px; background: #8C7B6B; opacity: 0.4; }
.svc-sep-text {
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  color: #8C7B6B;
  font-weight: 300;
}

.svc-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
}

@media (max-width: 860px) {
  .svc-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 520px) {
  .svc-grid { grid-template-columns: repeat(2, 1fr); }
}

.svc-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
  transition: background 0.2s;
}

.svc-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 20%;
  bottom: 20%;
  width: 1px;
  background: rgba(140,123,107,0.2);
}

.svc-item:first-child::before { display: none; }

@media (max-width: 860px) {
  .svc-item:nth-child(4)::before { display: none; }
}
@media (max-width: 520px) {
  .svc-item:nth-child(3)::before { display: none; }
  .svc-item:nth-child(5)::before { display: none; }
}

.svc-icon {
  width: 44px;
  height: 44px;
  color: #C1440E;
  margin-bottom: 1rem;
  transition: transform 0.2s;
}

.svc-icon svg { width: 100%; height: 100%; }

.svc-label {
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2C2C2C;
  margin-bottom: 0.25rem;
}

.svc-sublabel {
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  color: #8C7B6B;
  font-weight: 300;
  line-height: 1.4;
}

.svc-item--link { padding: 0; }

.svc-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  width: 100%;
  height: 100%;
  text-decoration: none;
  transition: background 0.2s;
}


.svc-cta {
  margin-top: 0.6rem;
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  font-weight: 500;
  color: #C1440E;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.2s, transform 0.2s;
}

/* ── Paiement (strip discret) ───────────────── */
.pay-strip {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(140,123,107,0.15);
  font-size: 0.7rem;
  color: #8C7B6B;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-align: center;
}

.pay-strip__label {
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #8C7B6B;
  margin-right: 0.75rem;
}

/* ── Section Horaires ───────────────────────── */
.hours-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 2px solid #2C2C2C;
}

.hours-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid rgba(140,123,107,0.15);
}

.hours-day {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #2C2C2C;
  white-space: nowrap;
  min-width: 10rem;
}

.hours-row--closed .hours-day {
  color: #8C7B6B;
  font-weight: 400;
}

.hours-dots {
  flex: 1;
  border-bottom: 1px dotted rgba(140,123,107,0.3);
}

.hours-status {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8C7B6B;
  font-weight: 300;
}

.hours-slots {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.hours-slot {
  font-size: 0.88rem;
  color: #C1440E;
  font-weight: 400;
  letter-spacing: 0.05em;
}

.hours-slot-sep {
  color: rgba(140,123,107,0.4);
  font-size: 0.75rem;
}

/* Bannière pas de réservation */
.noresrv-banner {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(193,68,14,0.06);
  border: 1px solid rgba(193,68,14,0.3);
  border-left: 3px solid #C1440E;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2.5rem;
}

.noresrv-icon {
  width: 22px;
  height: 22px;
  color: #C1440E;
  flex-shrink: 0;
  margin-top: 1px;
}

.noresrv-title {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #2C2C2C;
  margin-bottom: 0.3rem;
}

.noresrv-sub {
  font-size: 0.78rem;
  color: #8C7B6B;
  font-weight: 300;
  line-height: 1.6;
}

/* ── Section À propos ───────────────────────── */
.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 6rem;
  align-items: start;
}

@media (max-width: 768px) {
  .about-layout { grid-template-columns: 1fr; gap: 3rem; }
}

.about-left {
  position: relative;
}

.about-em {
  font-style: italic;
  color: #C1440E;
}

.about-rule {
  width: 40px;
  height: 1px;
  background: rgba(249,245,239,0.25);
  margin-bottom: 1.5rem;
}

.about-tagline {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  color: rgba(249,245,239,0.35);
  line-height: 1.6;
  letter-spacing: 0.03em;
}

.about-char {
  position: absolute;
  bottom: -3rem;
  right: -2rem;
  font-size: 10rem;
  line-height: 1;
  color: rgba(193,68,14,0.07);
  font-family: 'Playfair Display', serif;
  pointer-events: none;
  user-select: none;
}

@media (max-width: 768px) {
  .about-char { display: none; }
}

.about-right {
  padding-top: 3.5rem;
}

.about-body {
  font-size: 1rem;
  line-height: 1.85;
  color: rgba(249,245,239,0.65);
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.about-body strong {
  color: rgba(249,245,239,0.9);
  font-weight: 500;
}

.about-cta {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #C1440E;
  text-decoration: none;
  border-bottom: 1px solid rgba(193,68,14,0.4);
  padding-bottom: 2px;
  transition: border-color 0.2s, color 0.2s;
  font-family: 'Inter', sans-serif;
}

.about-cta:hover {
  color: #F9F5EF;
  border-color: rgba(249,245,239,0.4);
}

</style>
