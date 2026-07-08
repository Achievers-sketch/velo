//! Cross-chain HTLC — Stellar side of an ETH/BTC/SOL <-> Stellar swap.
//!
//! Not wired into the product yet. `release()` on this contract must
//! publish the revealed secret as an event so an off-chain relayer can
//! read it and claim the counterpart leg on the other chain. That
//! relayer is the actual cross-chain milestone — this contract only
//! needs to guarantee atomicity on the Stellar side.
//!
//! STATUS: scaffold only. Port the lock/release/refund logic from
//! `escrow` once the relayer design is settled — the state machine is
//! identical, only the release event payload differs.
#![no_std]

use soroban_sdk::{contract, contractimpl, Env};

#[contract]
pub struct AtomicSwapContract;

#[contractimpl]
impl AtomicSwapContract {
    pub fn placeholder(_env: Env) {
        // Intentionally empty. See htlc-core::Htlc for the trait this
        // contract needs to implement.
    }
}
